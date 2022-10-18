// import { sendEmail, verifyUser } from "../controller/emailServices";
import { Router } from "express";
import {
	registerUser
} from "../controller/userController";


const router = Router();

/* POST register users*/
router.post("/", async (req, res) => {
	try {
		const data = req.body;
		const response = await registerUser(data);
		// console.log(response)
		return res.status(201).json({
			message: "Success",
			response,
		});
	} catch (error) {
		// console.log(error);
		return res.status(400).json({
			message: error,
		});
	}
});

export default router;