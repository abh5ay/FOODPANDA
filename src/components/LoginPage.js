

import React from 'react';
import './LoginPage.css'; 

const LoginPage = () => {
  return (
    <div className="login-page">
      <h2>Login to Your Account</h2>
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
