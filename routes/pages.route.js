import express from "express";
import path from "path";
import UserController from "../controllers/user.controller.js";

const router = express.Router();

router.route("/").get((req, res) => {
    res.sendFile(path.resolve() + "/index.html");
});

router.route("/login").get((req, res) => {
    res.sendFile(path.resolve() + "/login.html");
});

router.route("/get-all-users").get(UserController.getAllUsers);

export default router;