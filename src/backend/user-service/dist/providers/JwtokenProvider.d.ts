import { IJwtoken } from "src/app.user.dto";
import { IJwtokenProvider } from "./IJwtokenProvider";
import { JwtPayload } from 'jsonwebtoken';
export declare class JwtokenProvider implements IJwtokenProvider {
    createToken(userID: number): IJwtoken;
    verifyToken(token: string): JwtPayload & {
        id: number;
    };
}
