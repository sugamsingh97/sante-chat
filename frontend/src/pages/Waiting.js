import React from 'react';

/**
 * Composant de spinner animé
 * Crée un cercle SVG avec un dégradé qui tourne infiniment
 * Utilise une animation CSS pour la rotation
 */
const spinner = (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ animation: 'spin 1s linear infinite' }}>
    {/* Définition du dégradé pour le spinner */}
    <defs>
      <linearGradient id="spinner-gradient" x1="0" y1="32" x2="64" y2="32" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#21D375" />
        <stop offset="100%" stopColor="#fff" />
      </linearGradient>
    </defs>
    {/* Cercle rotatif avec le dégradé */}
    <circle
      cx="32"
      cy="32"
      r="28"
      stroke="url(#spinner-gradient)"
      strokeWidth="6"
      fill="none"
      strokeLinecap="round"
    />
    {/* Animation de rotation */}
    <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
  </svg>
);

/**
 * Composant Waiting
 * Affiche une page d'attente pendant le traitement des données
 * Comprend :
 * - Le logo SantéChat
 * - Un message d'attente
 * - Un spinner animé
 * Le tout sur un fond dégradé vert clair vers blanc
 */
export default function Waiting() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(160deg, #f4fcf6 0%, #fff 60%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Montserrat, Arial, sans-serif',
    }}>
      {/* En-tête avec le logo */}
      <div style={{ marginBottom: 40, textAlign: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ fontWeight: 700, fontSize: 36, color: '#111', letterSpacing: '-1px', marginTop: 8 }}>
            SantéChat<span style={{ color: '#21D375' }}>.com</span>
          </span>
        </div>
      </div>
      {/* Message d'attente */}
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <div style={{ fontWeight: 700, fontSize: 36, color: '#222' }}>Analyse des croquettes</div>
        <div style={{ fontWeight: 700, fontSize: 36, color: '#21D375', marginTop: 8 }}>en cours...</div>
      </div>
      {/* Affichage du spinner */}
      <div style={{ marginTop: 24 }}>{spinner}</div>
    </div>
  );
} 