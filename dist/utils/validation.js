"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUSerSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.registerUSerSchema = zod_1.default
    .object({
    firstName: zod_1.default.string(),
    lastName: zod_1.default.string(),
    email: zod_1.default.string().email(),
    phone: zod_1.default.string(),
    avatar: zod_1.default.string().optional(),
    isVerified: zod_1.default.boolean().optional(),
    password: zod_1.default.string({
        required_error: "Password is required",
    }).min(6, { message: "Password must be 6 or more characters long" }),
    confirmPassword: zod_1.default.string().min(6, { message: "Confirm password must be 6 or more characters long" }),
})
    .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
        ctx.addIssue({
            code: "custom",
            message: "Password did not match confirm password",
        });
    }
});
//# sourceMappingURL=validation.js.map