import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ isLoggedIn, onLogin }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    onLogin();
    // После успешного входа перенаправляем на страницу SecretPage
    navigate('/secret');
  };

  // Если пользователь уже вошел, перенаправляем на страницу SecretPage
  if (isLoggedIn) {
    navigate('/secret');
    return null; // Можно вернуть null, так как компонент LoginPage не должен ничего рендерить в этом случае
  }

  return (
    <div className="jumbotron">
      <p>Login to see the secret page!</p>
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;
