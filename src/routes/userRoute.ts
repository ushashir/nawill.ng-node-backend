// import { sendEmail, verifyUser } from "../controller/emailServices";
import { Router } from "express";
import {
	registerUser
} from "../controller/userController";


const router = Router();

/* POST register users*/
router.post("/", async (req, res) => {
	try {
		// const data = req.body;
        const data = "This is register route"
		const response = await registerUser(data);
		return res.status(201).json({
			message: "Success",
			response,
		});
	} catch (error) {
		return res.status(400).json({
			message: error,
		});
	}
});

export default router;