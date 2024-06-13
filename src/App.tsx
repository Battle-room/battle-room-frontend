import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import './styles/App.css';
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SigninPage";
import EmailVerifyPage from "./pages/EmailVerify";
import { Provider, useDispatch } from "react-redux";
import { userStore, UserStoreActions } from "./store/UserStore";
import { getAccessToken } from "./services/CookieService";
import { getMe } from "./api/auth";

function AppRoutes() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const token = getAccessToken();
      if (token) {
        try {
          const response = await getMe(token);
          dispatch({ type: UserStoreActions.SET_USER, payload: response.data });
        } catch (error) {
          console.error("Failed to authenticate user", error);
          dispatch({ type: UserStoreActions.CLEAR_USER });
        }
      } else {
        dispatch({ type: UserStoreActions.CLEAR_USER });
      }
    };

    checkUser();
  }, [dispatch, navigate]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/verify/email/:token" element={<EmailVerifyPage />} />
    </Routes>
  );
}

function App() {
  return (
    <Provider store={userStore}>
        <AppRoutes />
    </Provider>
  );
}

export default App;
