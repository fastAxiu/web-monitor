const originalProto = XMLHttpRequest.prototype;
const originalOpen = originalProto.open;
const originalSend = originalProto.send;

function proxyXHR() {
  originalProto.open = (...args) => {
    this.url = args[1];
    this.method = args[0];
    originalOpen.apply(this, args);
  };

  originalProto.send = (...args)=> {
    this.startTime = Date.now();

    const onLoadend = () => {
      this.endTime = Date.now();
      this.duration = this.endTime - this.startTime;

    //   const { status, duration, startTime, endTime, url, method } = this;
    //   report

      this.removeEventListener("loadend", onLoadend, true);
    };

    this.addEventListener("loadend", onLoadend, true);
    originalSend.apply(this, args);
  };
}

export const XHR = {
  proxyXHR,
};
