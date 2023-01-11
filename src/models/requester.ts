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

    handleRequestError(err: AxiosError) {
        console.log(err);
        this.lastErrorCode = err.code;
        throw new Error(this.getTranslatedLastError())
    }

    async get() {
        return axios.get(this.targetDomain).then((result: AxiosResponse) => {
            return result;
        }).catch((err: AxiosError) => this.handleRequestError(err))
    }

    async post() {
        return axios.post(this.targetDomain).then((result: AxiosResponse) => {
            return result;
        }).catch((err: AxiosError) => this.handleRequestError(err))
    }

    async put() {
        return axios.put(this.targetDomain).then((result: AxiosResponse) => {
            return result;
        }).catch((err: AxiosError) => this.handleRequestError(err))
    }

    async delete() {
        return axios.delete(this.targetDomain).then((result: AxiosResponse) => {
            return result;
        }).catch((err: AxiosError) => this.handleRequestError(err))
    }

    async patch() {
        return axios.patch(this.targetDomain).then((result: AxiosResponse) => {
            return result;
        }).catch((err: AxiosError) => this.handleRequestError(err))
    }

    getTranslatedLastError() {
        return i18n.httpErrors.filter(item => item.key === this.lastErrorCode)[0]?.value || undefined;
    }
}