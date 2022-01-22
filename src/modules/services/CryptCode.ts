import { genSalt, hash, compare } from "bcrypt"

export default class CtyptCode {
    private saltRounds = 10;

    public async encode(code: string): Promise<string> {
        const salt = await genSalt(this.saltRounds);
        const codeHash = hash(code, salt);

        return codeHash
    }

    public static async compareOnHash(text: string, encodedText: string) {
        const result = await compare(text, encodedText);

        return result;
    }
}