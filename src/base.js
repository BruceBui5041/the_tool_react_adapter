import _ from 'lodash';
import Cookies from 'js-cookie';
import { v4 as uuidv4 } from 'uuid';
import webJSChannel from './web_js_channel';
import AppBrigde from './app-bridge'
const _initContext = { _data: {}, _prevData: {}, _platform: 'mobile' };
export const context = _initContext;

function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = React.useRef();
  // Store current value in ref
  React.useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes
  // Return previous value (happens before update in useEffect above)
  return ref.current;
}

const __ondataresponse = (requestId, data) => {
  webJSChannel.emit(requestId, data);
};


Object.assign(window, {
  
  usePrevious,

  context,
  
  // this function only used on dart side
  __ondataresponse,
  webJSChannel,
  uuidv4,

  /**
   * This is the interface for dart run async js code
   * @param {*} code
   * @returns
   */
  __tWeb_callAsyncJavaScript: async (code) => {
    return await eval(code);
  },

  appBridge: AppBrigde
});
