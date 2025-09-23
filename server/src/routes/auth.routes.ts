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
router.post("/refresh", authController.logout);

// GOOGLE START
router.post("/google", authController.logout);

// GOOGLE CALLBACK
router.post("/google/callback", authController.logout);

export default router;
