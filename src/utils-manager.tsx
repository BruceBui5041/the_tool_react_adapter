import _, { isArray, isFunction, isPlainObject, isString } from 'lodash';

interface IBindingContext {
  contextData: Record<string, any>;
  propValue: any;
  rootData?: Record<string, any>;
}

export class UtilsManager {
  static regexPattern = /[^{{\}}]+(?=}})/g;
  static rootPrefix = '$root.';

  static isValueBinding = (rawBindingValue: string) => {
    return !_.isEmpty(rawBindingValue.match(UtilsManager.regexPattern));
  };

  bindingValueToProp = (bindingInfo: {
    contextData: Record<string, any>;
    rawValueBinding: any;
    rootData?: Record<string, any>;
  }): any => {
    const { contextData, rawValueBinding, rootData = {} } = bindingInfo;

    if (typeof rawValueBinding !== 'string') return rawValueBinding;

    if (!UtilsManager.isValueBinding(rawValueBinding)) return rawValueBinding;

    const regexPattern = /{{\s*([\w.]+)\s*}}/g;
    const value = rawValueBinding.replace(
      regexPattern,
      (match: string, value: any) => value,
    );

    let boundValue = _.get(contextData, value);
    if (rawValueBinding.includes(UtilsManager.rootPrefix)) {
      boundValue = _.get(rootData, rawValueBinding.split('.')[1]);
    }

    if (!isString(boundValue)) {
      return boundValue;
    }

    const computedValue: any = rawValueBinding;

    const resultString = computedValue.replace(
      UtilsManager.regexPattern,
      (match: string, key: string) => {
        const trimedMatch = match.trim();

        if (trimedMatch.startsWith(UtilsManager.rootPrefix)) {
          return _.get(rootData, trimedMatch.split('.')[1]);
        }

        return _.get(contextData, trimedMatch);
      },
    );

    console.log(`resultString ${JSON.stringify(resultString)}`);

    return resultString.replace(
      regexPattern,
      (match: string, value: any) => value,
    );
  };
}

// const utilsManager = new UtilsManager();

// const result = utilsManager.bindingValueToProp({
//   contextData: { b: 2222 },
//   propValue: 'aaaa {{ $root.a }} bbbb {{b }} cccc {{c}}',
//   rootData: { a: 1111, c: 3333 },
// });

// console.log('abcd result', result);
export const utilsManager = new UtilsManager();
