import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { authModel } from "../models/auth.model";
import { GoogleAuthType, UserType } from "../types/UserType";
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

    const { accessToken, refreshToken } = await authModel.issueTokensForUsers(
      newUser.id
    );

    return { user: newUser, accessToken, refreshToken };
  },

  signIn: async (data: UserType) => {
    const user = await authModel.findByEmail(data.email);

    if (!user || !user.password) {
      throw new AppError("Invalid credentials", 401);
    }

    const isPasswordMatched = await bcrypt.compare(
      data.password,
      user.password
    );

    if (!isPasswordMatched) {
      throw new AppError("Invalid credentials", 401);
    }

    const { accessToken, refreshToken } = await authModel.issueTokensForUsers(
      user.id
    );

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

  issueTokensForUsers: async (userId: string) => {
    const { accessToken, refreshToken } = await authModel.issueTokensForUsers(
      userId
    );

    return { accessToken, refreshToken };
  },

  googleAuth: async (profile: GoogleAuthType) => {
    const user = await authModel.googleAuth(profile);
    return user;
  },
};
