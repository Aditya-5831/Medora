import { UserType } from "../types/UserType";
import db from "../config/db";

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

  refresh: async (refreshToken: string) => {
    const stored = await db.refreshToken.findUnique({
      where: {
        token: refreshToken,
      },
    });

    return stored;
  },
};
