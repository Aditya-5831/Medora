import { apiRequest } from "@/lib/apiRequest";
import { useAuthStore } from "@/stores/useAuthStore";
import { useMutation } from "@tanstack/react-query";
import { LogOutIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import UserAvatar from "./UserAvatar";

const UserButton = () => {
  const { user, setUser } = useAuthStore((state) => state);

  const { mutate: logout } = useMutation({
    mutationFn: async () => await apiRequest.post("/auth/logout"),

    onSuccess: () => {
      setUser(null);
    },
  });

  if (!user) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="cursor-pointer rounded-full focus-visible:outline-none"
          title="avatar button"
        >
          <UserAvatar seed={user.name} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-60 rounded-xl border p-2 shadow-lg"
        align="end"
      >
        <DropdownMenuLabel>
          Logged in as <span>{user.name}</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => logout()}>
          <LogOutIcon className="text-destructive mr-1 size-4" />
          <span className="text-destructive">logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
