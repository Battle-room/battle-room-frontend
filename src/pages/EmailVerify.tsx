import { useParams } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import { verifyEmail } from "../api/auth";
import "../styles/EmailVerifyPage.css"; // Додайте відповідний CSS файл для стилізації
import { AxiosResponse } from "axios";

export default function EmailVerifyPage() {
  const { token } = useParams();
  const [status, setStatus] = useState("loading"); // Стани: "loading", "success", "error"

  const verify = async () => {
    try {
      const response = await verifyEmail(token as string) as AxiosResponse;
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };

  if (token) {
    verify();
  }

  return (
    <div>
      <Header />
      <div className="email-verify-container">
        {status === "loading" && <div className="loading-icon">Завантаження...</div>}
        {status === "success" && <div className="success-message">Верифікація успішна!</div>}
        {status === "error" && <div className="error-message">Сталася помилка при верифікації.</div>}
      </div>
    </div>
  );
}
