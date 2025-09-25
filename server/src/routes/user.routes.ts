import { Router } from "express";
import { userController } from "../controllers/user.controller";
import { authorize } from "../middlewares/auth.middleware";

const router = Router();

// FETCH CURRENT USER
router.get("/me", authorize, userController.fetchCurrentUser);

export default router;
