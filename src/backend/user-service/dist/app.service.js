"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const app_entitie_user_1 = require("./app.entitie-user");
let AppService = class AppService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    getHello() {
        return 'Hello World! User Service';
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
        if (!data)
            throw new Error('User is not valid');
        const findByEmail = await this.findByEmail(data.email);
        if (findByEmail)
            throw new Error('User already exist');
        const user = new app_entitie_user_1.User(data);
        await this.prisma.user.create({
            data: {
                email: user.email,
                last_name: user.last_name,
                name: user.name,
                password: user.password,
            }
        });
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map