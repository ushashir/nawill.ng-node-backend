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
        // console.log(response)
        return res.status(201).json({
            message: "Success",
            response,
        });
    }
    catch (error) {
        // console.log(error);
        return res.status(400).json({
            message: error,
        });
    }
});
exports.default = router;
//# sourceMappingURL=userRoute.js.map