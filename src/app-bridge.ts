import { EventEmitter } from 'eventemitter3';
import _, { get, toString } from 'lodash';
import * as acorn from 'acorn';
import AppBase from './app-base';

export interface IPageInfo {
  eventId?: string;
  pagePath: string;
}

class AppBridge {
  #bridgeChannel = new EventEmitter();
  #appBase = new AppBase();
  #context: any = {};

  constructor() {
    this.#context = this.#appBase.getContextData();
  }

  emitJSFunction = async (
    eventId: string,
    fullFunction: string,
    pageId: string,
    args: any,
    childDataPath?: string,
  ) => {
    if (isFunctionString(fullFunction) && !fullFunction.endsWith('()')) {
      try {
        const result = await this.#computeFunctionBaseOnFunctionString(
          fullFunction,
          pageId,
          childDataPath,
        );

        this.emitDartFunction(eventId, fullFunction, {
          data: result,
          error: undefined,
        });
      } catch (e: any) {
        console.error(e);

        this.emitDartFunction(eventId, fullFunction, {
          data: undefined,
          error: e.message,
        });
      }
      return;
    }
    const functionName = fullFunction.replace('()', '');
    const { data, error } = await this.#handleEmitJSFunction(
      eventId,
      functionName,
      pageId,
      args,
    );

    this.emitDartFunction(eventId, fullFunction, { data, error });
  };

  #handleEmitJSFunction = async (
    eventId: string,
    functionName: string,
    pageId: string,
    args: any,
  ): Promise<{ data: any; error: any }> => {
    try {
      const appBaseFunction = _.get(this.#appBase, functionName);

      // console.log(
      //   `#handleEmitJSFunction ${pageId} ${appBaseFunction} ${functionName}`,
      // );

      let result = null;
      if (typeof args == 'string') {
        try {
          args = JSON.parse(args);
        } catch (err) {}
      }

      if (appBaseFunction) {
        result = await appBaseFunction?.(...args);
      } else {
        const pageContext = this.#appBase.getPageContext(pageId);
        const pageFunction = _.get(pageContext, functionName);
        if (!_.isFunction(pageFunction))
          console.error(`Function not found: ${functionName}. Page: ${pageId}`);
        result = await pageFunction?.(...args);
      }

      return { data: result, error: undefined };
    } catch (err: any) {
      console.error(err);
      return { data: undefined, error: err.message };
    }
  };

  emitDartFunction = async (
    eventId: string,
    functionName: string,
    payload: { data: any; error: any },
  ) => {
    switch (this.#context._platform) {
      case 'web':
        (window as any).js_response(eventId, JSON.stringify(payload));
        return;

      case 'mobile':
        await (window as any).flutter_inappwebview.callHandler(
          'js_response',
          eventId,
          JSON.stringify(payload),
        );
        return;
    }
  };

  /**
   *
   * @param functionString
   * @param pageId The path to function the root data of the page from app context
   * @param childDataPath For the params of the function may using child data path. Ex: Child of list, datatable, expansion, ...
   * @returns
   */
  #computeFunctionBaseOnFunctionString = async (
    functionString: string,
    pageId: string,
    childDataPath?: string,
  ) => {
    if (!functionString) {
      console.error('executed function cannot be empty');
    }

    const regex = /([a-zA-Z0-9_]+)\((.*)\)/;
    const match = functionString.match(regex);

    if (match) {
      const functionName = match[1];
      let context = this.#appBase.getContextData();
      if (!context.hasOwnProperty(functionName)) {
        context = this.#appBase.getPageContext(pageId);
      }

      // const paramString = match[2];
      // const params = parseParams(paramString);
      const params = this.#parseParamsWithAcorn(
        functionString,
        get(context, childDataPath || ''),
      );

      const finalParams: any[] = [];

      for await (const param of params) {
        let clonedParam = _.clone(param);

        clonedParam = clonedParam?.trim?.();
        //   if (paramString == '()') {
        //     return NOT_CONTAINS_PARAMS;
        //   } else
        if (!isNaN(clonedParam)) {
          finalParams.push(parseFloat(clonedParam));
        } else if (clonedParam === 'true') {
          finalParams.push(true);
        } else if (clonedParam === 'false') {
          finalParams.push(false);
        } else if (/^['"].*['"]$/.test(clonedParam)) {
          finalParams.push(clonedParam.slice(1, -1));
        } else if (isFunctionString(clonedParam)) {
          const paramFunctionValue: any =
            await this.#computeFunctionBaseOnFunctionString(
              clonedParam,
              pageId,
              childDataPath,
            );

          finalParams.push(paramFunctionValue);
        } else if (/^\[.*\]$/.test(clonedParam)) {
          finalParams.push(clonedParam.slice(1, -1));
        } else {
          console.log(`param ${clonedParam} ${param}`);

          try {
            clonedParam = JSON.parse(clonedParam);
            if (_.isPlainObject(clonedParam)) {
              finalParams.push(clonedParam);
            }
          } catch {
            finalParams.push(clonedParam);
          }
        }
      }

      if (functionName) {
        if (context.hasOwnProperty(functionName)) {
          const returnedValue = await context[functionName](...finalParams);
          return returnedValue;
        } else {
          throw Error(
            `Function '${functionString}' is not existing in page context.`,
          );
        }
      }

      throw Error(`String '${functionString}' is not a valid function`);
    } else {
      console.log(`String '${functionString}' is not a valid function.`);
      throw Error(`String '${functionString}' is not a valid function`);
    }
  };

  #parseParamsWithAcorn = (functionString: string, context = {}) => {
    try {
      const ast: any = acorn.parse(`(${functionString})`, {
        ecmaVersion: 2022,
      });

      if (
        ast &&
        ast.body.length > 0 &&
        ast.body[0].type === 'ExpressionStatement' &&
        ast.body[0].expression.type === 'CallExpression'
      ) {
        const callExpression = ast.body[0].expression;

        const params = callExpression.arguments.map((arg: any) =>
          stringifyArgument(arg, context),
        );

        return params;
      } else {
        throw Error(`Invalid function string. ${functionString}`);
      }
    } catch (e: any) {
      throw Error(
        `Error parsing function string: ${functionString}.`,
        e.message,
      );
    }
  };

  #evaluateObject = (obj: any) => {
    const result: any = {};
    for (const prop of obj.properties) {
      result[prop.key.name] = this.#evaluateParam(prop.value);
    }
    return result;
  };

  #evaluateArray = (arr: any) => {
    return arr.elements.map(this.#evaluateParam);
  };

  #evaluateParam = (param: any) => {
    if (param.type === 'Literal') {
      return param.value;
    } else if (param.type === 'ObjectExpression') {
      return this.#evaluateObject(param);
    } else if (param.type === 'ArrayExpression') {
      return this.#evaluateArray(param);
    } else {
      return param;
    }
  };

  getAppBase = (): AppBase => {
    return this.#appBase;
  };
}

function stringifyArgument(arg: any, context: Record<any, any>) {
  switch (arg.type) {
    case 'Literal':
      return JSON.stringify(arg.value);
    case 'ObjectExpression':
      return `{${arg.properties
        .map(
          (prop: any) =>
            `"${prop.key.name}": ${stringifyArgument(prop.value, context)}`,
        )
        .join(', ')}}`;
    case 'ArrayExpression':
      return `[${arg.elements
        .map((element: any) => stringifyArgument(element, context))
        .join(', ')}]`;
    case 'CallExpression':
      return `${arg.callee.name}(${arg.arguments
        .map((argument: any) => stringifyArgument(argument, context))
        .join(', ')})`;
    case 'Identifier':
      return toString(get(context, arg.name, undefined));
    default:
      return '';
  }
}

function isFunctionString(str: string) {
  const functionDefinitionRegex = /^function\s*\w*\s*\(([^()]*)\)\s*\{(.*)\}$/;
  const arrowFunctionDefinitionRegex = /^\(([^()]*)\)\s*=>\s*\{(.*)\}$/;
  const conciseArrowFunctionDefinitionRegex = /^\(([^()]*)\)\s*=>\s*(.*)$/;
  const functionCallRegex = /^[a-zA-Z_$][0-9a-zA-Z_$]*\((.*)\)$/;

  return (
    functionDefinitionRegex.test(str) ||
    arrowFunctionDefinitionRegex.test(str) ||
    conciseArrowFunctionDefinitionRegex.test(str) ||
    functionCallRegex.test(str)
  );
}

export default new AppBridge();
