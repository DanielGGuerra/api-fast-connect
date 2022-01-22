import { sign, verify } from "jsonwebtoken";

interface IPayload {
    name: string;
    email: string;
}

export class Auth {
    private static _expirationTime = "1d";
    private static _secret = 'ok_isso_mesmo';

    public static async genereteToken({ name, email }: IPayload) {
        const payload = { name, email };
        const options = { expiresIn: Auth._expirationTime };

        const token = await sign(payload, Auth._secret, options);

        return token;
    }

    public static verifyToken(bearerToken: string) {
        try {
            const [, token] = bearerToken.split(" ");
            
            verify(token, Auth._secret);
            
            return true;
        } catch(err) {
            
            return false;
        }
    }
}