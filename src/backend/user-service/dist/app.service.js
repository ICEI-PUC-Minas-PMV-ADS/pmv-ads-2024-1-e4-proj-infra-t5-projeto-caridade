"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const app_entitie_user_1 = require("./app.entitie-user");
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const bcrypt_1 = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AppService = class AppService {
    constructor(jwtokenProvider) {
        this.jwtokenProvider = jwtokenProvider;
        this.prisma = new client_1.PrismaClient();
    }
    async findByEmail(email) {
        const user = await this.prisma.user.findFirst({
            where: {
                email
            }
        });
        return user;
    }
    async create(data) {
        const userAlreadyExist = await this.findByEmail(data.email);
        if (userAlreadyExist)
            throw new Error('User already exist.');
        const { email, name, last_name, password } = data;
        const passwordCrypt = await bcrypt_1.default.hash(password, 10);
        const user = new app_entitie_user_1.User({
            email,
            name,
            last_name,
            password: passwordCrypt
        });
        await this.prisma.user.create({
            data: {
                name: user.name,
                last_name: user.last_name,
                email: user.email,
                password: user.password,
            },
        });
    }
    async authenticate(data) {
        if (!data)
            throw new Error("Invalid fields");
        const findUser = await this.findByEmail(data.email);
        if (!findUser)
            throw new Error("User cannot be find");
        const isMatch = await bcrypt_1.default.compare(data.password, findUser.password);
        if (!isMatch)
            throw new Error("invalid password");
        const token = await this.jwtokenProvider.signAsync({ id: findUser.id });
        return token;
    }
    async authUser(token) {
        if (!token)
            throw new Error("Invalid token");
        const verifyToken = this.jwtokenProvider.verify(token);
        if (!verifyToken.id)
            throw new Error("Invalid user");
        const user = await this.getById(verifyToken.id);
        return user;
    }
    async getById(id) {
        return await this.prisma.user.findFirst({
            where: {
                id,
            }
        });
    }
    async delete(token) {
        const loggedUser = await this.authUser(token);
        if (!loggedUser)
            throw new Error('Invalid user');
        await this.prisma.user.delete({
            where: {
                id: loggedUser.id,
            }
        });
    }
    async update(data) {
        const loggedUser = await this.authUser(data.token);
        if (!loggedUser)
            throw new Error('Invalid user');
        return await this.prisma.user.update({
            where: {
                id: loggedUser.id
            },
            data: {
                last_name: data.user.last_name,
                name: data.user.name,
                password: data.user.password ? data.user.password : loggedUser.password,
            }
        });
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], AppService);
//# sourceMappingURL=app.service.js.map