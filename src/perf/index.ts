import { VITAL } from "./vital";
// navigation timin https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry
function getTimes() {
  const { duration, redirectStart, redirectEnd, requestStart, responseStart } = performance.getEntries('navigation')[0];
  return {
    loadTime: duration,
    redirect: redirectEnd - redirectStart,
    ttfb: responseStart - requestStart
  }
}
function run() {
  VITAL.getVitals();
}
export const PERF = {
  run,
};
