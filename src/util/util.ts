function runAfterLoad(cb) {
  if (document.readyState === "complete") {
    cb();
  } else {
      window.addEventListener('load', cb, true);
  }
}

export const UTIL = {
    runAfterLoad
}