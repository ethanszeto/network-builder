import UserAccessor from "../db_accessor/user.accessor.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export default class UserController {
    static async getAllUsers(req, res) {
        const users = await UserAccessor.getAllUsers();
        res.render("index", { users: users } );
    }

    static async followUser(req, res, next) {
        if(!req.error) {
            const toFollow = req.body.follow;
            const username = req.user.username;
            const following = req.user.following;
            
            if(!following.some((follower) => {follower === toFollow}) && toFollow != username) {
                await UserAccessor.addFollower(username, toFollow);
            }

            res.redirect('/');
        } else {
            return next();
        }
    }

    static getProfile(req, res, next) {
        if(!req.error) {
            const user = req.user;
            res.render('profile',
            {
                name: user.username,
                email: user.email,
                bio: user.bio,
                followers: user.followers,
                following: user.following,
            });
        } else {
            return next();
        }
    }

    static getLogout(req, res) {
        res.clearCookie("token");
        res.redirect('/');
        console.log("Signed out");
    }

    static getLoginPage(req, res) {
        if(req.cookies.token) {
            res.redirect('/profile');
        } else {
            res.render('login_page', {error: req.cookies.error});
        }
    }

    static getSignUpPage(req, res) {
        if(req.cookies.token) {
            res.redirect('/profile');
        } else {
            res.render('sign_up');
        }
    }

    static async postLogin(req, res, next) {
        try {
            if(!req.cookies.token) {
                const user = await UserAccessor.getUser(req.body.username);
                if(user) {
                    const result = await bcrypt.compare(req.body.password, user.password);
                    if(result) {
                        const token = jwt.sign(
                            {
                                username: user.username,
                                email: user.email,
                                bio: user.bio,
                                followers: user.followers,
                                following: user.following
                            },
                            process.env.TOKEN_KEY
                        );
                        res.cookie('token', token, {httpOnly: true, maxAge: 60 * 60 * 1000});
                        res.redirect('/profile');
                    } else {
                        req.error = 400;
                        next();
                    }
                } else {
                    req.error = 400;
                    next();
                }
            } else {
                res.redirect('/profile');
            }
        } catch(e) {
            req.error = 400;
            next();
        }
    }

    static async postSignUp(req, res, next) {
        try {
            req.body.password = await bcrypt.hash(req.body.password, 10);
            await UserAccessor.createUser(req.body);
            res.redirect("/login-page");
        } catch (e) {
            return next();
        }
    }
}