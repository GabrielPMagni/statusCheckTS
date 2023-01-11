export const isValidURL = (textToValidate: string) => {
    return new RegExp('(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?').test(textToValidate);
}