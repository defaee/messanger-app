import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { useSelector } from "react-redux";
import { refreshRegisterData, setRegisterConfirmPassword, setRegisterEmail, setRegisterPassword } from "../../../redux/reducers/AuthSlice";
import { useEffect } from "react";
import { registerValidate } from "../../../utils/validation/authValidation";

function AuthRegister() {
  const dispatch: AppDispatch = useDispatch();
  const registerData = useSelector((state: RootState) => state.auth.registerData);

  useEffect(() => {
    return () => {
      dispatch(refreshRegisterData());
    };
  }, []);

  const handleRegister = () => {
    registerValidate(registerData.email.value, registerData.password.value, registerData.confirmPassword.value);
  };

  return (
    <div className="h-[70%] w-full pt-[15%] flex flex-col items-center justify-between">
      <div className="flex flex-col items-center gap-5 xs:gap-7">
        <input
          className={`auth ${
            registerData.email.valid ? "border-primary-color focus:ring-primary-color" : "border-red-500 focus:ring-red-500"
          }`}
          placeholder="Email"
          value={registerData.email.value}
          onChange={(e) => dispatch(setRegisterEmail(e.target.value))}
        />
        <input
          className={`auth ${
            registerData.password.valid ? "border-primary-color focus:ring-primary-color" : "border-red-500 focus:ring-red-500"
          }`}
          placeholder="Password"
          value={registerData.password.value}
          onChange={(e) => dispatch(setRegisterPassword(e.target.value))}
        />
        <input
          className={`auth ${
            registerData.confirmPassword.valid ? "border-primary-color focus:ring-primary-color" : "border-red-500 focus:ring-red-500"
          }`}
          placeholder="Confirm Password"
          value={registerData.confirmPassword.value}
          onChange={(e) => dispatch(setRegisterConfirmPassword(e.target.value))}
        />
      </div>
      <button className="auth" onClick={handleRegister}>
        REGISTER
      </button>
    </div>
  );
}

export default AuthRegister;
