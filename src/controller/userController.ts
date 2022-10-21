import { registerUSerSchema } from "../utils/validation";
import prisma from "../utils/prismaClient";
import { decryptPassword, encryptPassword } from "../utils/hashPw";
import { idText } from "typescript";

export async function registerUser(data: Record<string, unknown>) {
	const validData = registerUSerSchema.safeParse(data);
	if (!validData.success) {
		throw validData.error;
	}
	const record = validData.data;

	// check for duplicate mail, phone and username
	const duplicateMail = await prisma.user.findFirst({
		where: { email: record.email },
	});
	if (duplicateMail) throw "Email already exist";

	const duplicatePhone = await prisma.user.findFirst({
		where: { phone: record.phone },
	});
	if (duplicatePhone) throw "Phone number already exist";

	const response = prisma.user.create({
		data: {
			firstName: record.firstName,
			lastName: record.lastName,
			email: record.email,
      		phone: record.phone,
    		password: (await encryptPassword(record.password)) as string,
		}
	});
	return response;
}

export async function getUsers() {
	const response = await prisma.user.findMany()
	return response;
}

export async function getUser(id: string) {
	const user = await prisma.user.findUnique({
		where: {id: id},
	})
	if (user) {
		return user;
	}
	return "User not fond on database"
}

// app.get(`/post/:id`, async (req, res) => {
//   const { id }: { id?: string } = req.params

//   const post = await prisma.post.findUnique({
//     where: { id: Number(id) },
//   })
//   res.json(post)
// })

