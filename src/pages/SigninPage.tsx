import Header from "../components/Header";
import { useState } from "react";
import "../styles/Signup.css";
import { requestEmailVerification, signUp } from "../api/auth";
import { setJWT } from "../services/CookieService";
import { createAvatarUrl, updateUser } from "../services/UserService";
import { useDispatch } from "react-redux";
import { UserStoreActions } from "../store/UserStore";
import { useNavigate } from "react-router-dom";
import User from "../types/User";


export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleUsernameChange = (e: any) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response: any = await signUp(username, email, password);
      setJWT(response.data);
      const user = await updateUser() as User;
      user.avatar = createAvatarUrl(user.avatar);
      dispatch({ type: UserStoreActions.SET_USER, payload: user });
      requestEmailVerification(user.email);
      navigate('/')
    } catch (error) {
      console.error("Sign up failed", error);
    }
  };

  return (
    <div>
      <Header />
      <div className="signup-container">
        <div className="signup-form-container">
          <form onSubmit={handleSubmit} className="signup-form">
            <h2>Sign Up</h2>
            <div className="form-group">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
                required
              />
            </div>
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
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}
