"use client";

import { apiRequest } from "@/lib/apiRequest";
import { useAuthStore } from "@/stores/useAuthStore";
import { useQuery } from "@tanstack/react-query";
import { ReactNode, useEffect } from "react";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { setIsLoadingUser, setUser } = useAuthStore((state) => state);

  const { data: user, isLoading } = useQuery({
    queryKey: ["current_user"],
    queryFn: async () => {
      const { data } = await apiRequest.get("/user/me");
      return data.user;
    },

    retry: false,
  });

  useEffect(() => {
    setIsLoadingUser(isLoading);

    if (!isLoading) {
      setUser(user ?? null);
    }
  }, [user, setUser, isLoading, setIsLoadingUser]);

  return <>{children}</>;
};

export default AuthProvider;
