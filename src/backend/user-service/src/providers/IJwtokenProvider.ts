import { JwtPayload } from "jsonwebtoken"
import { IJwtoken } from "src/app.user.dto"

export interface IJwtokenProvider {
    createToken(userID: number): IJwtoken
    verifyToken(token: string): JwtPayload & {id: number} 
}