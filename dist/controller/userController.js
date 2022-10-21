"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.getUsers = exports.registerUser = void 0;
const validation_1 = require("../utils/validation");
const prismaClient_1 = __importDefault(require("../utils/prismaClient"));
const hashPw_1 = require("../utils/hashPw");
async function registerUser(data) {
    const validData = validation_1.registerUSerSchema.safeParse(data);
    if (!validData.success) {
        throw validData.error;
    }
    const record = validData.data;
    // check for duplicate mail, phone and username
    const duplicateMail = await prismaClient_1.default.user.findFirst({
        where: { email: record.email },
    });
    if (duplicateMail)
        throw "Email already exist";
    const duplicatePhone = await prismaClient_1.default.user.findFirst({
        where: { phone: record.phone },
    });
    if (duplicatePhone)
        throw "Phone number already exist";
    const response = prismaClient_1.default.user.create({
        data: {
            firstName: record.firstName,
            lastName: record.lastName,
            email: record.email,
            phone: record.phone,
            password: (await (0, hashPw_1.encryptPassword)(record.password)),
        }
    });
    return response;
}
exports.registerUser = registerUser;
async function getUsers() {
    const response = await prismaClient_1.default.user.findMany();
    return response;
}
exports.getUsers = getUsers;
async function getUser(id) {
    const user = await prismaClient_1.default.user.findUnique({
        where: { id: id },
    });
    if (user) {
        return user;
    }
    return "User not fond on database";
}
exports.getUser = getUser;
// app.get(`/post/:id`, async (req, res) => {
//   const { id }: { id?: string } = req.params
//   const post = await prisma.post.findUnique({
//     where: { id: Number(id) },
//   })
//   res.json(post)
// })
//# sourceMappingURL=userController.js.map