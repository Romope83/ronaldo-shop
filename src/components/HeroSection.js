import React from 'react';
import './HeroSection.css';

function HeroSection({ onLoginClick }) {
  return (
    <div className="hero">
      <h1>Bem-vindo à Lojinha do Ronaldo</h1>
      <p>Baratin baratin!</p>
      <button className="btn-login" onClick={onLoginClick}>Login</button>
    </div>
  );
}

export default HeroSection;