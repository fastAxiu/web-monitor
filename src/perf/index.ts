import { LOG } from "../util/log";
import { VITAL } from "./vital";
// navigation timin https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry
function getTimes() {
  const { duration, redirectStart, redirectEnd, requestStart, responseStart } = performance.getEntriesByType('navigation')[0] as any;
  return {
    loadTime: duration,
    redirect: redirectEnd - redirectStart,
    ttfb: responseStart - requestStart
  }
}
function run() {
  // Illegal invocation
  // VITAL.getVitals();
  LOG.report('https://localhost:8080/bl', getTimes());
}
export const PERF = {
  run,
};
