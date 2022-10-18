import { registerUSerSchema } from "../utils/validation";
import prisma from "../utils/prismaClient";
import { decryptPassword, encryptPassword } from "../utils/hashPw";

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
		},
		select: {
			id: true,
			firstName: true,
			lastName: true,
			email: true,
			phone: true,
		},
	});
	return response;
}

