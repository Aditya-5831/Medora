import { Router } from "express";
import { authController } from "../controllers/auth.controller";

const router = Router();

// SIGN UP
router.post("/sign-up", authController.signUp);

// SIGN IN
router.post("/sign-in", authController.signIn);

// REFRESH
router.post("/refresh", authController.refresh);

// LOGOUT
router.post("/logout", authController.logout);

// GOOGLE START
router.get("/google", authController.googleStart);

// GOOGLE CALLBACK
router.get("/google/callback", authController.googleCallback);

export default router;
