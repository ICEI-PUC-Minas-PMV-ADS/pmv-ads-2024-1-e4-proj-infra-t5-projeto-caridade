"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtokenProvider = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
class JwtokenProvider {
    createToken(userID) {
        const secret = process.env.MY_SECRET;
        const token = jsonwebtoken_1.default.sign({ id: userID }, secret, {
            expiresIn: 21600
        });
        if (!token) {
            throw new Error('Failed to create token');
        }
        return { token };
    }
    verifyToken(token) {
        const secret = process.env.MY_SECRET;
        const verify = jsonwebtoken_1.default.verify(token, secret);
        return verify;
    }
}
exports.JwtokenProvider = JwtokenProvider;
//# sourceMappingURL=JwtokenProvider.js.map