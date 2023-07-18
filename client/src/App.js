import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageClass, setMessageClass] = useState('login-message');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessageClass('login-message');
        setMessage(data.message);
      } else {
        setMessageClass('no-login-message');
        setMessage('Login ou Senha incorretos');
      }
    } catch (error) {
      console.log(error);
      setMessageClass('server-failed-message');
      setMessage('Ocorreu um erro ao fazer o login');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h1 className="login-title">Login</h1>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Nome:
          </label>
          <input
            type="text"
            id="name"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Senha:
          </label>
          <input
            type="password"
            id="password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="form-button">Enviar</button>
        {message && <p className={messageClass}>{message}</p>}
      </form>
    </div>
  );
}

export default App;
