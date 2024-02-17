import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import './styles/App.css'
import LoginPage from "./pages/LoginPage";
import SigninPage from "./pages/SigninPage";
import {UserProvider} from "./UserContext";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/signin" element={<SigninPage />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
