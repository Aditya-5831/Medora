"use client";

import { apiRequest } from "@/lib/apiRequest";
import { useAuthStore } from "@/stores/useAuthStore";
import { useQuery } from "@tanstack/react-query";
import { ReactNode, useEffect } from "react";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { setIsLoadingUser, isLoadingUser, setUser } = useAuthStore(
    (state) => state,
  );

  const { data: user } = useQuery({
    queryKey: ["current_user"],
    queryFn: async () => {
      const { data } = await apiRequest.get("/user/me");
      return data.user;
    },

    retry: false,
  });

  useEffect(() => {
    setIsLoadingUser(isLoadingUser);

    if (isLoadingUser) {
      setUser(user ?? null);
    }
  }, [user, setUser, isLoadingUser, setIsLoadingUser]);

  return <>{children}</>;
};

export default AuthProvider;
