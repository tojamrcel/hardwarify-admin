import { IoMdPerson } from "react-icons/io";
import SignOutButton from "../features/auth/SignOutButton";

function UserInfo() {
  return (
    <div className="my-4 mt-auto flex flex-col gap-2">
      <div className="flex items-center justify-center gap-4 text-lg text-gray-600 antialiased">
        <IoMdPerson />
        <span>Logged as USERNAME</span>
      </div>
      <div className="flex items-center justify-center">
        <SignOutButton />
      </div>
    </div>
  );
}

export default UserInfo;
