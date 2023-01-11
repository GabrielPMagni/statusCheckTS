import Requester from "./requester";

export class Status extends Requester {
    requester: Requester;

    constructor(targetDomain: string) {
        super(targetDomain)
    }

    async getStatus() {
        const response = await super.get();
        if (response.status) {
            return response.status;
        }
        throw new Error(`Erro ao requisitar código de status de ${this.targetDomain}`);
    }
    
}