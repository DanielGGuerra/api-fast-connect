import { genSalt, hash } from "bcrypt"

export default class CtyptCode {
    private saltRounds = 10;

    public async encode(code: string): Promise<string> {
        const salt = await genSalt(this.saltRounds);
        const codeHash = hash(code, salt);

        return codeHash
    }
}