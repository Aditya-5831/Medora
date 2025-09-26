import { NextFunction, Request, Response } from "express";
import passport from "passport";
import { authModel } from "../models/auth.model";
import { authService } from "../services/auth.service";
import { AppError } from "../utils/AppError";
import { signInSchema, signUpSchema } from "../validations/auth.validation";

export const authController = {
  signUp: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData = signUpSchema.safeParse(req.body);

      if (!userData.success) {
        const errors = userData.error.issues.map((err) => ({
          field: err.path.join("."),
          message: err.message,
        }));

        throw new AppError("Validation failed", 422, errors);
      }

      const { user, accessToken, refreshToken } = await authService.signUp(
        userData.data
      );

      res.cookie("refresh_token", refreshToken, {
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      return res.status(201).json({
        success: true,
        message: "User created successfully",
        user,
        accessToken,
      });
    } catch (error) {
      next(error);
    }
  },

  signIn: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData = signInSchema.safeParse(req.body);

      if (!userData.success) {
        const errors = userData.error.issues.map((err) => ({
          field: err.path.join("."),
          message: err.message,
        }));

        throw new AppError("Validation failed", 422, errors);
      }

      const { safeUser, accessToken, refreshToken } = await authService.signIn(
        userData.data
      );

      res.cookie("refresh_token", refreshToken, {
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      return res.status(200).json({
        success: true,
        message: "Logged In successfully",
        safeUser,
        accessToken,
      });
    } catch (error) {
      next(error);
    }
  },

  logout: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await authService.logout(req.cookies.refresh_token);

      res.clearCookie("refresh_token", {
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
      });

      return res.status(200).json({
        success: true,
        message: "Logout success",
      });
    } catch (error) {
      next(error);
    }
  },

  refresh: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const accessToken = await authService.refresh(req.cookies.refresh_token);

      return res.status(200).json({
        success: true,
        message: "Token refeshed successfully",
        accessToken,
      });
    } catch (error) {
      next(error);
    }
  },

  googleStart: passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
  }),

  googleCallback: async (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate(
      "google",
      { session: false },
      async (err, user: any) => {
        try {
          if (err) {
            return next(err);
          }

          if (!user) {
            return res.redirect("http://localhost:3000/sign-in");
          }

          const { refreshToken } = await authModel.issueTokensForUsers(user.id);

          res.cookie("refresh_token", refreshToken, {
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV === "production",
            maxAge: 7 * 24 * 60 * 60 * 1000,
          });

          return res.redirect("http://localhost:3000");
        } catch (error) {
          next(error);
        }
      }
    )(req, res, next);
  },
};
