import { FETCH } from "./fetch";
import { XHR } from "./xhr";

function run() {
    XHR.proxyXHR();
    FETCH.proxyFetch();
}

export const API = {
    run
}