import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import convertPersianToEnglish from "../../utils/helpers/persian_to_english";
import { emailRegex } from "../../utils/helpers/regex";

interface dataType {
  value: string;
  valid: boolean;
}

interface AuthInitialState {
  type: "login" | "register";
  registerData: {
    email: dataType;
    password: dataType;
    confirmPassword: dataType;
  };
  loginData: {
    email: dataType;
    password: dataType;
  };
}

const initialState: AuthInitialState = {
  type: "register",
  registerData: {
    email: { value: "", valid: true },
    password: { value: "", valid: true },
    confirmPassword: { value: "", valid: true },
  },
  loginData: {
    email: { value: "", valid: true },
    password: { value: "", valid: true },
  },
};

const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    changeType: (state, action: PayloadAction<"login" | "register">) => {
      if (state.type === action.payload) return;
      state.type = action.payload;
    },
    setLoginEmail: (state, action: PayloadAction<string>) => {
      const entry = convertPersianToEnglish(action.payload);
      if (emailRegex.test(entry)) {
        state.loginData.email.valid = true;
      } else {
        state.loginData.email.valid = false;
      }
      state.loginData.email.value = entry;
    },
    setLoginPassword: (state, action: PayloadAction<string>) => {
      const entry = convertPersianToEnglish(action.payload);
      if (entry.length < 8 || entry.length > 24) {
        state.loginData.password.valid = false;
      } else {
        state.loginData.password.valid = true;
      }
      state.loginData.password.value = entry;
    },
    setRegisterEmail: (state, action: PayloadAction<string>) => {
      const entry = convertPersianToEnglish(action.payload);
      if (emailRegex.test(entry)) {
        state.registerData.email.valid = true;
      } else {
        state.registerData.email.valid = false;
      }
      state.registerData.email.value = entry;
    },
    setRegisterPassword: (state, action: PayloadAction<string>) => {
      const entry = convertPersianToEnglish(action.payload);
      if (entry.length < 8 || entry.length > 24) {
        state.registerData.password.valid = false;
      } else {
        state.registerData.password.valid = true;
      }
      if (state.registerData.confirmPassword.value === entry) {
        state.registerData.confirmPassword.valid = true;
      }
      state.registerData.password.value = entry;
    },
    setRegisterConfirmPassword: (state, action: PayloadAction<string>) => {
      const entry = convertPersianToEnglish(action.payload);
      if (entry === state.registerData.password.value) {
        state.registerData.confirmPassword.valid = true;
      } else {
        state.registerData.confirmPassword.valid = false;
      }
      state.registerData.confirmPassword.value = entry;
    },
    refreshLoginData: (state) => {
      state.loginData.email = { value: "", valid: true };
      state.loginData.password = { value: "", valid: true };
    },
    refreshRegisterData: (state) => {
      state.registerData.email = { value: "", valid: true };
      state.registerData.password = { value: "", valid: true };
      state.registerData.confirmPassword = { value: "", valid: true };
    },
  },
});

export const {
  changeType,
  setLoginEmail,
  setLoginPassword,
  setRegisterEmail,
  setRegisterPassword,
  setRegisterConfirmPassword,
  refreshLoginData,
  refreshRegisterData,
} = AuthSlice.actions;
export default AuthSlice.reducer;
