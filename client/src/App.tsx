import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Chat from "./components/templates/chat/Chat";
import Auth from "./components/templates/auth/Auth";
import Profile from "./components/templates/profile/Profile";
import ReduxProvider from "./redux/ReduxProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ReduxProvider>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/chat" element={<Chat />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="auth" />} />
        </Routes>
      </BrowserRouter>
    </ReduxProvider>
  );
}

export default App;
