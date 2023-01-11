import { I18nResolver } from "i18n-ts"

const ptBR = {
    operational: "Operando normalmente",
    requestErrorCode: "Erro na requisição, código",
    invalidRequest: "Requisição inválida",
    unexpectedError: "Erro inesperado",
    httpErrors: [
        { key: "ENOTFOUND", value: ": Endereço não encontrado" }
    ]
}

const strings = {
    ptBR: ptBR,
    default: ptBR
}

export const i18n = new I18nResolver(strings, "ptBR").translation;
