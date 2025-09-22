import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../config/db";
import { authModel } from "../models/auth.model";
import { UserType } from "../types/UserType";
import { AppError } from "../utils/AppError";

const access_secret = process.env.JWT_ACCESS_SECRET!;
const refresh_secret = process.env.JWT_REFRESH_SECRET!;

export const authService = {
  signUp: async (data: UserType) => {
    const existingUser = await authModel.findByEmail(data.email);

    if (existingUser) {
      throw new AppError("User already exists", 400);
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const newUser = await authModel.signUp({
      ...data,
      password: hashedPassword,
    });

    const accessToken = jwt.sign({ userId: newUser.id }, access_secret, {
      expiresIn: "15m",
    });
    const refreshToken = jwt.sign({ userId: newUser.id }, refresh_secret, {
      expiresIn: "7d",
    });

    await db.refreshToken.create({
      data: {
        token: refreshToken,
        userId: newUser.id,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });

    return { user: newUser, accessToken, refreshToken };
  },

  signIn: async (data: UserType) => {
    const user = await authModel.findByEmail(data.email);

    if (!user) {
      throw new AppError("Invalid credentials", 401);
    }

    const isPasswordMatched = await bcrypt.compare(
      data.password,
      user.password
    );

    if (!isPasswordMatched) {
      throw new AppError("Invalid credentials", 401);
    }

    const accessToken = jwt.sign({ userId: user.id }, access_secret, {
      expiresIn: "15m",
    });
    const refreshToken = jwt.sign({ userId: user.id }, refresh_secret, {
      expiresIn: "7d",
    });

    await db.refreshToken.create({
      data: {
        token: refreshToken,
        userId: user.id,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });

    const { password, ...safeUser } = user;

    return { safeUser, accessToken, refreshToken };
  },

  logout: async (refreshToken: string) => {
    if (!refreshToken) {
      throw new AppError("Refresh token is required", 400);
    }

    await authModel.logout(refreshToken);

    return { message: "Logout success" };
  },

  refresh: async (refreshToken: string) => {
    if (!refreshToken) {
      throw new Error("Refresh token is required");
    }

    const stored = await authModel.refresh(refreshToken);

    if (!stored || stored.expiresAt < new Date()) {
      throw new AppError("Invalid or expired refresh token", 403);
    }

    const payload = jwt.verify(stored.token, refresh_secret) as {
      userId: string;
    };

    const access_token = jwt.sign({ userId: payload.userId }, access_secret, {
      expiresIn: "15m",
    });

    return access_token;
  },
};
