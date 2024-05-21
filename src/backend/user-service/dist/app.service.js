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
const class_validator_1 = require("class-validator");
let AppService = class AppService {
    constructor() {
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
        const findByEmail = await this.findByEmail(data.email);
        if (findByEmail)
            throw new Error('User already exist');
        const errors = await (0, class_validator_1.validate)(data);
        if (errors.length > 0) {
            throw new Error('Validation failed');
        }
        else {
            return this.prisma.user.create({
                data: {
                    name: data.name,
                    last_name: data.last_name,
                    email: data.email,
                    password: data.password,
                },
            });
        }
    }
    async update(data) {
        if (!data)
            throw new Error('Nothing to update');
        await this.prisma.user.update({
            where: {
                id: data.id
            },
            data: {
                name: data.name,
                last_name: data.last_name
            }
        });
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map