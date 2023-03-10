import { I18nResolver } from "i18n-ts"

const ptBR = {
    operational: "Operando normalmente",
    requestErrorCode: "Erro na requisição, código",
    invalidRequest: "Requisição inválida",
    unexpectedError: "Erro",
    invalidURL: "URL inválida",
    notFound: "Dados não encontrados",
    httpErrors: [
        { key: "ENOTFOUND", value: ": Endereço não encontrado" },
        { key: "ETIMEDOUT", value: ": Esgotado tempo limite da requisição" }
    ]
}

const strings = {
    ptBR: ptBR,
    default: ptBR
}

export const i18n = new I18nResolver(strings, "ptBR").translation;
