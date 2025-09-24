import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthStoreProps {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
}

interface User {
  id: string;
  email: string;
  name: string;
}

export const useAuthStore = create<AuthStoreProps>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      setUser: (user) => set({ user, isAuthenticated: !!user }),
    }),
    { name: "user" },
  ),
);
