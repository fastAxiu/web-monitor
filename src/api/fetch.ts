import { CONFIG } from "../config";
import { LOG } from "../util/log";

const originalFetch = window.fetch;

function proxyFetch() {
    window.fetch = (url, config) => {
        const baseData = {
            startTime: Date.now(),
            url,
            method: config?.method,
            type: 'fetch',
        }

        return originalFetch(url, config)
            .then(res => {
                const { status, ok: success } = res.clone();
                LOG.report(CONFIG.reportUrl, {
                    ...baseData,
                    duration: Date.now() - baseData.startTime,
                    status,
                })
                return res;
            })
            .catch(err => {
                LOG.report(CONFIG.reportUrl, {
                    ...baseData,
                    duration: Date.now() - baseData.startTime,
                    status: -1,
                })
                throw err;
            })
    }
}

export const FETCH = {
    proxyFetch
}