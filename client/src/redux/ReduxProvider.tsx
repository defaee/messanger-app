import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import store from "./store";

const ReduxProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
