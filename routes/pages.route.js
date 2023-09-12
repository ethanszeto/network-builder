import express from "express";
import path from "path";
import UserController from "../controllers/user.controller.js";
import authorize from "../auth/authorization.js";
import errorHandler from "../controllers/error.controller.js";

const router = express.Router();

router.route("/").get(UserController.getAllUsers);

router.route("/login").get((req, res) => {
    res.sendFile(path.resolve() + "/login.html");
});

router.route("/css/index.css").get((req, res) => {
    res.sendFile(path.resolve() + "/css/index.css");
});

router.route("/css/style.css").get((req, res) => {
    res.sendFile(path.resolve() + "/css/style.css");
});

router.route("/follow").post(authorize, UserController.followUser, errorHandler);

router.route("/profile").get(authorize, UserController.getProfile, errorHandler);

router.route("/login-page")
.get(UserController.getLoginPage)
.post(UserController.postLogin, errorHandler);

router.route("/sign-up")
.get(UserController.getSignUpPage)
.post(UserController.postSignUp, errorHandler);

router.route("/logout").get(UserController.getLogout);

export default router;