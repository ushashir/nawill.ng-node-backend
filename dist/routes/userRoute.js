"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { sendEmail, verifyUser } from "../controller/emailServices";
const express_1 = require("express");
const userController_1 = require("../controller/userController");
const router = (0, express_1.Router)();
/* POST register users*/
router.post("/", async (req, res) => {
    try {
        const data = req.body;
        const response = await (0, userController_1.registerUser)(data);
        return res.status(201).json({
            message: "Success",
            response,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
});
/* GET all users */
router.get("/", async (req, res) => {
    try {
        const response = await (0, userController_1.getUsers)();
        return res.status(200).json({
            message: "Success",
            response,
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: error,
        });
    }
});
/* GET single users*/
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const user = await (0, userController_1.getUser)(id);
        return res.status(200).json({
            message: "Success",
            user,
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: error,
        });
    }
});
exports.default = router;
//# sourceMappingURL=userRoute.js.map