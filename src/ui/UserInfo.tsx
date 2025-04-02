import { IoMdPerson } from "react-icons/io";
import SignOutButton from "../features/auth/SignOutButton";
import useProfile from "../features/auth/useProfile";

function UserInfo() {
  const { profile } = useProfile();
  return (
    <div className="my-4 mt-auto flex flex-col gap-2">
      <div className="flex items-center justify-center gap-2 text-lg text-gray-600 antialiased">
        <IoMdPerson />
        <span className="text-center">Logged as {profile?.firstName}</span>
      </div>
      <div className="flex items-center justify-center">
        <SignOutButton />
      </div>
    </div>
  );
}

export default UserInfo;
