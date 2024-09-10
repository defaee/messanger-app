import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { refreshLoginData, setLoginEmail, setLoginPassword } from "../../../redux/reducers/AuthSlice";
import { useEffect } from "react";
import { loginValidate } from "../../../utils/validation/authValidation";

function AuthLogin() {
  const dispatch: AppDispatch = useDispatch();
  const loginData = useSelector((state: RootState) => state.auth.loginData);

  useEffect(() => {
    return () => {
      dispatch(refreshLoginData());
    };
  }, []);

  const handleLogin = () => {
    loginValidate(loginData.email.value, loginData.password.value);
  };

  return (
    <div className="h-[70%] w-full pt-[20%] pb-[5%] flex flex-col items-center justify-between">
      <div className="flex flex-col items-center gap-8 xs:gap-12">
        <input
          className={`auth ${
            loginData.email.valid ? "border-primary-color focus:ring-primary-color" : "border-red-500 focus:ring-red-500"
          }`}
          placeholder="Email"
          value={loginData.email.value}
          onChange={(e) => dispatch(setLoginEmail(e.target.value))}
        />
        <input
          className={`auth ${
            loginData.password.valid ? "border-primary-color focus:ring-primary-color" : "border-red-500 focus:ring-red-500"
          }`}
          placeholder="Password"
          value={loginData.password.value}
          onChange={(e) => dispatch(setLoginPassword(e.target.value))}
        />
      </div>
      <button className="auth" onClick={handleLogin}>
        LOGIN
      </button>
    </div>
  );
}

export default AuthLogin;
