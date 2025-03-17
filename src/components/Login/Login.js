import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n/i18n';
import './Login.css';

function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [language, setLanguage] = useState(i18n.language); // Estado para el idioma actual

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
    
    if (password.length < 5 || password.length > 8) {
      setPasswordError(t('login.passwordError'));
      return;
    } else {
      setPasswordError('');
    }
    
    navigate('/home');
  };

  // Función para cambiar de idioma
  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
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

          {/* Botón de cambio de idioma */}
          <button type="button" className="language-button" onClick={toggleLanguage}>
            {language === 'en' ? 'Español' : 'English'}
          </button>

        </form>
      </div>
    </div>
  );
}

export default Login;
