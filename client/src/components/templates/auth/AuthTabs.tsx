import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { changeType } from "../../../redux/reducers/AuthSlice";

const AuthTabs = () => {
  const dispatch: AppDispatch = useDispatch();
  const type = useSelector((state: RootState) => state.auth.type);

  return (
    <div className="w-full h-[12%] flex flex-col items-center justify-between">
      <div className="w-full flex justify-between items-center select-none">
        <div
          onClick={() => dispatch(changeType("register"))}
          className={`auth-tabs-box text-sm ${type === "register" ? "font-extrabold" : "font-extralight"}`}
        >
          Register
        </div>
        <div
          onClick={() => dispatch(changeType("login"))}
          className={`auth-tabs-box text-sm ${type === "login" ? "font-extrabold" : "font-extralight"}`}
        >
          Login
        </div>
      </div>
      <div
        className={`w-full h-1 rounded-full bg-transparent duration-300 ${type === "register" ? "pr-[55%] pl-[5%]" : "pl-[55%] pr-[5%]"}`}
      >
        <div className="h-full w-full rounded-full bg-primary-color"></div>
      </div>
    </div>
  );
};

export default AuthTabs;
