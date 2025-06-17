import React from 'react';
import '../styles/Result.css';

/**
 * Détermine le badge et sa classe CSS en fonction de la valeur nutritionnelle
 * @param {number} value - Valeur nutritionnelle à évaluer
 * @returns {Object} - Objet contenant le label et la classe CSS du badge
 */
function getBadgeInfo(value) {
  if (value >= 0 && value <= 25) return { label: 'Faible', class: 'badge-1' };
  if (value >= 26 && value <= 50) return { label: 'Élevé', class: 'badge-1' };
  if (value >= 51 && value <= 75) return { label: 'Satisfaisant', class: 'badge-3' };
  if (value >= 76 && value <= 100) return { label: 'Excellent', class: 'badge-2' };
  return { label: '', class: '' };
}

/**
 * Renvoie l'icône appropriée pour indiquer la présence ou l'absence de céréales
 * @param {boolean} sansCereales - Indique si les croquettes sont sans céréales
 * @returns {JSX.Element} - Icône ✔️ ou ❌
 */
const getCerealIcon = (sansCereales) =>
  sansCereales ? (
    <span style={{ color: '#27ae60', fontSize: 24 }}>✔️</span>
  ) : (
    <span style={{ color: '#e74c3c', fontSize: 24 }}>❌</span>
  );

/**
 * Composant CatFoodDetails
 * Affiche les détails nutritionnels d'une marque de croquettes
 * Inclut :
 * - Note globale
 * - Image du produit
 * - Valeurs nutritionnelles avec badges d'évaluation
 * - Résumé des caractéristiques
 * 
 * @param {Object} catFoodDetails - Données détaillées des croquettes
 */
const CatFoodDetails = ({ catFoodDetails }) => {
  if (!catFoodDetails) return null;

  // Génère une note aléatoire entre 3 et 7
  const randomScore = (Math.random() * 4 + 3).toFixed(1);

  // Calcul des badges pour chaque valeur nutritionnelle
  const proteinBadge = getBadgeInfo(Number(catFoodDetails.proteins));
  const rpcBadge = getBadgeInfo(Number(catFoodDetails.rpc));
  const glucidesBadge = getBadgeInfo(Number(catFoodDetails.glucides));
  const rppBadge = getBadgeInfo(Number(catFoodDetails.rpp));
  const minerauxBadge = getBadgeInfo(Number(catFoodDetails.mineraux));

  return (
    <div className="catfood-main-result">
      {/* En-tête avec le nom du produit et la note */}
      <h2 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 700, marginBottom: 0 }}>
        {catFoodDetails.name}
        <span style={{ float: 'right', color: '#f7931e', fontSize: '4rem', fontWeight: 700, marginLeft: 24 }}>
          {randomScore}
          <div style={{ fontSize: '1rem', fontWeight: 400, color: '#0a3d62', textAlign: 'right' }}>NOTE</div>
        </span>
      </h2>

      {/* Section principale avec image et détails nutritionnels */}
      <div className="cat-food-details" style={{ marginTop: 32 }}>
        {/* Image du produit */}
        <div className="cat-food-image">
          <img src={`http://localhost:5000${catFoodDetails.image}`} alt={catFoodDetails.name} />
        </div>

        {/* Tableau des valeurs nutritionnelles */}
        <div className="cat-food-info">
          <div className="nutrition-list">
            {/* Protéines */}
            <div className="nutrition-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <div className="flex-row" style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
                <span>Protéines</span>
                <span>{catFoodDetails.proteins}%</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span className={`badge rounded-pill ${proteinBadge.class}`}>{proteinBadge.label}</span>
                <span className="info" data-bs-toggle="modal" data-bs-target="#proteinModal">ⓘ</span>
              </div>
            </div>

            {/* RPC (Rapport Protéino-Calorique) */}
            <div className="nutrition-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <div className="flex-row" style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
                <span>RPC</span>
                <span>{catFoodDetails.rpc}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span className={`badge rounded-pill ${rpcBadge.class}`}>{rpcBadge.label}</span>
                <span className="info" data-bs-toggle="modal" data-bs-target="#rpcModal">ⓘ</span>
              </div>
            </div>

            {/* Glucides */}
            <div className="nutrition-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <div className="flex-row" style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
                <span>Glucides</span>
                <span>{catFoodDetails.glucides}%</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span className={`badge rounded-pill ${glucidesBadge.class}`}>{glucidesBadge.label}</span>
                <span className="info" data-bs-toggle="modal" data-bs-target="#glucidesModal">ⓘ</span>
              </div>
            </div>

            {/* RPP (Rapport Protéino-Phosphorique) */}
            <div className="nutrition-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <div className="flex-row" style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
                <span>RPP</span>
                <span>{catFoodDetails.rpp}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span className={`badge rounded-pill ${rppBadge.class}`}>{rppBadge.label}</span>
                <span className="info" data-bs-toggle="modal" data-bs-target="#rppModal">ⓘ</span>
              </div>
            </div>

            {/* Minéraux */}
            <div className="nutrition-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <div className="flex-row" style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
                <span>Minéraux</span>
                <span>{catFoodDetails.mineraux}%</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span className={`badge rounded-pill ${minerauxBadge.class}`}>{minerauxBadge.label}</span>
                <span className="info" data-bs-toggle="modal" data-bs-target="#minerauxModal">ⓘ</span>
              </div>
            </div>

            {/* Indicateur Sans Céréales */}
            <div className="nutrition-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <div className="flex-row" style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
                <span>Sans Céréales</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span>{catFoodDetails.sansCereales ? '✔️' : '❌'}</span>
                <span className="info" data-bs-toggle="modal" data-bs-target="#cerealesModal">ⓘ</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section résumé */}
      {catFoodDetails.description && (
        <div className="catfood-summary-box">
          <div className="summary-title">💡 En résumé</div>
          <div className="summary-content">{catFoodDetails.description}</div>
        </div>
      )}
    </div>
  );
};

export default CatFoodDetails; 