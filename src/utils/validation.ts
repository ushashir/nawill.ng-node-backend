import z from "zod";

export const registerUSerSchema = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    phone: z.string(),
    avatar: z.string().optional(),
    isVerified: z.boolean().optional(),
    password: z.string({
      required_error: "Password is required",
    }).min(6, { message: "Password must be 6 or more characters long" }),
    confirmPassword: z.string().min(6, { message: "Confirm password must be 6 or more characters long" }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Password did not match confirm password",
      });
    }
  });
