import { initials } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface UserAvatarProps {
  seed: string;
}

const UserAvatar = ({ seed }: UserAvatarProps) => {
  const avatar = createAvatar(initials, {
    seed,
    fontWeight: 500,
    fontSize: 42,
  });

  return (
    <Avatar>
      <AvatarImage src={avatar.toDataUri()} alt="avatar" />
      <AvatarFallback>{seed.charAt(0).toUpperCase()}</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
