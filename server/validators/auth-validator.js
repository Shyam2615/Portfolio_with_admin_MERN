const {z} = require("zod");

const signupSchema = z.object({
    username: z.string({required_error: "Name is required"})
    .trim()
    .min(3, {message: "Name must be atleast of 3 chars"})
    .max(255, {message : "Name musr not exceed 255 chars"}),

    email: z.string({required_error: "email is required"})
    .trim()
    .email({message : "Invalid email"})
    .min(3, {message: "email must be atleast of 3 chars"})
    .max(255, {message : "email musr not exceed 255 chars"}),

    phone: z.string({required_error: "Phone is required"})
    .trim()
    .min(10, {message: "phone must be atleast of 10 chars"})
    .max(20, {message : "phone musr not exceed 20 chars"}),

    password: z.string({required_error: "password is required"})
    .trim()
    .min(7, {message: "password must be atleast of 6 chars"})
    .max(1024, {message : "password musr not exceed 255 chars"})
})

const loginSchema = z.object({
    email: z.string({required_error: "email is required"})
    .trim()
    .email({message : "Invalid email"})
    .min(3, {message: "email must be atleast of 3 chars"})
    .max(255, {message : "email must not exceed 255 chars"}),

    password: z.string({required_error: "password is required"})
    .trim()
    .min(3, {message: "password must be atleast of 6 chars"})
    .max(1024, {message : "password musr not exceed 255 chars"})
})

module.exports = {signupSchema, loginSchema};