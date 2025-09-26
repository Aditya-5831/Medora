import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthStoreProps {
  user: User | null;
  isAuthenticated: boolean;
  isLoadingUser: boolean;
  setUser: (user: User | null) => void;
  setIsLoadingUser: (loading: boolean) => void;
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
      isLoadingUser: false,

      setUser: (user) => set({ user, isAuthenticated: !!user }),

      setIsLoadingUser: (loading) => set({ isLoadingUser: loading }),
    }),
    { name: "user" },
  ),
);
