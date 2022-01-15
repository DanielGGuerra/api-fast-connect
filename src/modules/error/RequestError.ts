export default class CustomError extends Error {
    public readonly code: number;
    
    constructor({ code, name, message }) {
        super();
        this.code = code;
        this.name = name;
        this.message = message;
    }
}