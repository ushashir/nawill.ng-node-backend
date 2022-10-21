// import { sendEmail, verifyUser } from "../controller/emailServices";
import { Router } from "express";
import {
	registerUser,
	getUsers,
	getUser,
	
} from "../controller/userController";


const router = Router();

/* POST register users*/
router.post("/", async (req, res) => {
	try {
		const data = req.body;
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

/* GET all users */
router.get("/", async (req, res) => {
	try {
		const response = await getUsers();
		return res.status(200).json({
			message: "Success",
			response,
		})
	} catch (error) {
		console.log(error);
	
		return res.status(500).json({
			message: error,
		})
	}
	
})

/* GET single users*/
router.get("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const user = await getUser(id);
		return res.status(200).json({
			message: "Success",
			user,
		})
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			message: error,
		})
	}
	
})

export default router;