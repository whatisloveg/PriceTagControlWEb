import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="header">
        <h1>Контролируем цены вместе</h1>
        <h2>Донецкая народная республика</h2>
      </div>
      <form className="login-form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Пароль" required />
        <button type="submit">Войти</button>
        <a href="#" className="forgot-password-link">Забыли пароль?</a>
      </form>
    </div>
  );
};

export default LoginPage;
