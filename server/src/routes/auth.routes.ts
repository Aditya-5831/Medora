import { Router } from "express";
import { authController } from "../controllers/auth.controller";

const router = Router();

// SIGN UP
router.post("/sign-up", authController.signUp);

// SIGN IN
router.post("/sign-in", authController.signIn);

export default router;
