import db from "../config/db";

export const userModel = {
  fetchCurrentUser: async (id: string) => {
    const user = await db.user.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return user;
  },
};
