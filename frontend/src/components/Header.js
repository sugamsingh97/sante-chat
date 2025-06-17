import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="home-header">
      <div className="logo" style={{ cursor: 'pointer' }} onClick={() => navigate('/') }>
        <img src={require('../images/logo.png')} alt="SantéChat.com logo" />
      </div>
    </header>
  );
};

export default Header; 