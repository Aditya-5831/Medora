import jwt from "jsonwebtoken";
import db from "../config/db";
import { GoogleAuthType, UserType } from "../types/UserType";

export const authModel = {
  signUp: async (data: UserType) => {
    const user = await db.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return user;
  },

  findByEmail: async (email: string) => {
    const user = await db.user.findUnique({
      where: { email },
    });

    return user;
  },

  logout: async (refreshToken: string) => {
    await db.refreshToken.delete({
      where: {
        token: refreshToken,
      },
    });
  },

  issueTokensForUsers: async (userId: string) => {
    const accessToken = jwt.sign({ userId }, process.env.JWT_ACCESS_SECRET!, {
      expiresIn: "15m",
    });
    const refreshToken = jwt.sign({ userId }, process.env.JWT_REFRESH_SECRET!, {
      expiresIn: "7d",
    });

    await db.refreshToken.create({
      data: {
        token: refreshToken,
        userId,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });

    return { accessToken, refreshToken };
  },

  refresh: async (refreshToken: string) => {
    const stored = await db.refreshToken.findUnique({
      where: {
        token: refreshToken,
      },
    });

    return stored;
  },

  googleAuth: async ({
    providerId,
    profileEmail,
    refreshToken,
    accessToken,
    displayName,
  }: GoogleAuthType) => {
    const existingAccount = await db.account.findUnique({
      where: {
        provider_providerId: { provider: "google", providerId },
      },
      include: { user: true },
    });

    if (existingAccount) {
      return existingAccount.user;
    }

    let user = await db.user.findUnique({
      where: { email: profileEmail },
    });

    if (!user) {
      user = await db.user.create({
        data: {
          email: profileEmail,
          name: displayName,
        },
      });
    }

    await db.account.create({
      data: {
        userId: user.id,
        provider: "google",
        providerId,
        accessToken,
        refreshToken,
      },
    });

    return user;
  },
};
