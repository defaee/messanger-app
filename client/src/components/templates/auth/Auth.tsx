import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import AuthTabs from "./AuthTabs";
import AuthLogin from "./AuthLogin";
import AuthRegister from "./AuthRegister";

function Auth() {
  const type = useSelector((state: RootState) => state.auth.type);

  return (
    <main className="main-container flex justify-center items-center py-[5rem]">
      <div className="w-[85%] xs:w-[77%] hsm:w-[60%] sm:w-[53%] hmd:w-[90%] aspect-[6/9] hmd:aspect-[6/5] bg-bg-color shadow-md shadow-shadow-color rounded-lg flex flex-col hmd:flex-row hmd:justify-between items-center py-[30px] px-[5%]">
        <div className="w-full h-full hmd:w-[55%]">
          <h1 className="h-[15%] flex justify-center select-none hover:tracking-widest duration-700">
            Welcome to <span className="text-primary-color">D</span>efaee<span className="text-primary-color">C</span>hat
          </h1>
          <AuthTabs />
          {type === "register" ? <AuthRegister /> : <AuthLogin />}
        </div>
        <div className="w-[40%] hidden hmd:flex h-full flex-col items-center justify-center">
          <img alt="auth image" src="/images/auth_image.png" className="w-full h-[60%]" />
        </div>
      </div>
    </main>
  );
}

export default Auth;
