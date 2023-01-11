import axios, { AxiosError, AxiosResponse } from "axios";
import { i18n } from "../constants/i18n";
import { isValidURL } from "../constants/typeChecking";

export default class Requester {
    targetDomain: string;
    private lastErrorCode: string | undefined;

    constructor(targetDomain: string) {
        if (!isValidURL(targetDomain)) {
            throw new Error(i18n.invalidURL);
        }
        this.targetDomain = targetDomain;
    }

    async get() {
        return axios.get(this.targetDomain).then((result: AxiosResponse) => {
            return result;
        }).catch((err: AxiosError) => {
            console.log(err);
            this.lastErrorCode = err.code;
            throw new Error(this.getTranslatedLastError())
        })
    }

    async post() {
        return axios.post(this.targetDomain).then((result: AxiosResponse) => {
            return result;
        }).catch((err: AxiosError) => {
            console.log(err);
            this.lastErrorCode = err.code;
            throw new Error(this.getTranslatedLastError())
        })
    }

    async put() {
        return axios.put(this.targetDomain).then((result: AxiosResponse) => {
            return result;
        }).catch((err: AxiosError) => {
            console.log(err);
            this.lastErrorCode = err.code;
            throw new Error(this.getTranslatedLastError())
        })
    }

    async delete() {
        return axios.delete(this.targetDomain).then((result: AxiosResponse) => {
            return result;
        }).catch((err: AxiosError) => {
            console.log(err);
            this.lastErrorCode = err.code;
            throw new Error(this.getTranslatedLastError())
        })
    }

    async patch() {
        return axios.patch(this.targetDomain).then((result: AxiosResponse) => {
            return result;
        }).catch((err: AxiosError) => {
            console.log(err);
            this.lastErrorCode = err.code;
            throw new Error(this.getTranslatedLastError())
        })
    }

    getTranslatedLastError() {
        return i18n.httpErrors.filter(item => item.key === this.lastErrorCode)[0]?.value || undefined;
    }
}