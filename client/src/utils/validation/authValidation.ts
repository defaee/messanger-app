import { toast } from "react-toastify";
import { emailRegex } from "../helpers/regex";

const loginValidate = (email: string, password: string) => {
  if (!emailRegex.test(email)) {
    return toast.error("Email is not Valid");
  }
  if (password.length < 8 || password.length > 24) {
    return toast.error("Password must be between 8 and 24 characters");
  }
  return true;
};

const registerValidate = (email: string, password: string, confirmPassword: string) => {
  if (!emailRegex.test(email)) {
    return toast.error("Email is not Valid");
  }
  if (password.length < 8 || password.length > 24) {
    return toast.error("Password must be between 8 and 24 characters");
  }
  if (password !== confirmPassword) {
    return toast.error("Passwords Doesn't match");
  }
  return true;
};

export { loginValidate, registerValidate };
