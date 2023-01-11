import axios, { AxiosError, AxiosResponse } from "axios";

export default class Requester {
    targetDomain: string;

    constructor(targetDomain: string) {
        this.targetDomain = targetDomain;
    }

    async get() {
        return axios.get(this.targetDomain).then((result: AxiosResponse) => {
            return result;
        }).catch((err: AxiosError) => {
            console.log(err);
            return err;
        })
    }

    async post() {
        return axios.post(this.targetDomain).then((result: AxiosResponse) => {
            return result;
        }).catch((err: AxiosError) => {
            console.log(err);
            return err;
        })
    }

    async put() {
        return axios.put(this.targetDomain).then((result: AxiosResponse) => {
            return result;
        }).catch((err: AxiosError) => {
            console.log(err);
            return err;
        })
    }

    async delete() {
        return axios.delete(this.targetDomain).then((result: AxiosResponse) => {
            return result;
        }).catch((err: AxiosError) => {
            console.log(err);
            return err;
        })
    }

    async patch() {
        return axios.patch(this.targetDomain).then((result: AxiosResponse) => {
            return result;
        }).catch((err: AxiosError) => {
            console.log(err);
            return err;
        })
    }
}