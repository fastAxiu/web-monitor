import { CONFIG } from "../config";
import { LOG } from "../util/log";
import { VITAL } from "./vital";
// navigation timin https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry
function getTimes() {
  const { duration, redirectStart, redirectEnd, requestStart, responseStart } = performance.getEntriesByType('navigation')[0] as any;
  // need to add fp, fcp, fmp
  return {
    loadTime: duration,
    redirect: redirectEnd - redirectStart,
    ttfb: responseStart - requestStart
  }
}
function run() {
  // VITAL.getVitals();
  LOG.report(CONFIG.reportUrl, JSON.stringify(getTimes()));
}
export const PERF = {
  run,
};
