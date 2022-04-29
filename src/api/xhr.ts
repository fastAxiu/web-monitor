import { CONFIG } from "../config";
import { LOG } from "../util/log";

const originalProto = XMLHttpRequest.prototype;
const originalOpen = originalProto.open;
const originalSend = originalProto.send;

function proxyXHR() {
  originalProto.open = (...args) => {
    this.url = args[1];
    this.method = args[0];
    originalOpen.apply(this, args);
  };

  originalProto.send = (...args) => {
    this.startTime = Date.now();

    const onLoadend = () => {
      this.endTime = Date.now();
      
      const { status, duration, startTime, url, method } = this;
      LOG.report(CONFIG.reportUrl, {
        duration,
        status,
        startTime,
        url,
        method,
        type: "xhr",
      });
      this.removeEventListener("loadend", onLoadend, true);
    };

    this.addEventListener("loadend", onLoadend, true);
    originalSend.apply(this, args);
  };
}

export const XHR = {
  proxyXHR,
};
