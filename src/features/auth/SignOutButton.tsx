import Button from "../../ui/Button";
import useLogout from "./useLogout";

function SignOutButton() {
  const { logout } = useLogout();
  return <Button onClick={logout}>Logout</Button>;
}

export default SignOutButton;
