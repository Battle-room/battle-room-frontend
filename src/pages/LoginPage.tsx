import Header from "../components/Header";
import { useState } from "react";
import "../styles/Login.css";
import { logIn } from "../api/auth";
import { setJWT } from "../services/CookieService";
import { createAvatarUrl, updateUser } from "../services/UserService";
import { useDispatch } from "react-redux";
import { UserStoreActions } from "../store/UserStore";
import User from "../types/User";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response: any = await logIn(email, password);
      setJWT(response.data);
      const user = await updateUser() as User;
      user.avatar = createAvatarUrl(user.avatar)
      dispatch({type: UserStoreActions.SET_USER, payload: user});
      navigate('/')
    } catch(error) {
      console.log('Login failed')
    }
  };

  return (
    <div>
      <Header />
      <div className="login-container">
        <div className="login-form-container">
          <form onSubmit={handleSubmit} className="login-form">
            <h2>Login</h2>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
