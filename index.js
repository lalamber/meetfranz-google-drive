"use strict";

module.exports = Franz => class Messenger extends Franz {
  overrideUserAgent() {
    return window.navigator.userAgent.replace(/(Franz|Electron)([^\s]+\s)/g, '');
  }

};

//The following code is vital as of 22.04.2019 to have Franz display Google Drive correctly.
window.chrome = {
  runtime: {
    connect: () => {
      return {
        onMessage: {
          addListener: () => {},
          removeListener: () => {},
        },
        postMessage: () => {},
        disconnect: () => {},
      }
    }
  }
}