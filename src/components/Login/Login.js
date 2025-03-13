import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Login.css';

function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setEmailError(t('login.emailError'));
      return;
    } else {
      setEmailError('');
    }
    
    if (password.length < 8) {
      setPasswordError(t('login.passwordError'));
      return;
    } else {
      setPasswordError('');
    }
    
    navigate('/home');
  };

  return (
    <div className="login-background">
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>{t('login.title')}</h2>
          
          <div className="form-group">
            <label>{t('login.email')}</label>
            <input
              type="email"
              placeholder={t('login.emailPlaceholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <div className="error-message">{emailError}</div>}
          </div>
          
          <div className="form-group">
            <label>{t('login.password')}</label>
            <input
              type="password"
              placeholder={t('login.passwordPlaceholder')}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <div className="error-message">{passwordError}</div>}
          </div>
          
          <button type="submit" className="login-button">
            {t('login.loginButton')}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;