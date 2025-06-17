import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import Footer from '../components/Footer';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-root">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-img">
          <img src={require('../images/illustration-home.jpg')} alt="Illustration Home" />
        </div>
        <div className="hero-content">
          <h1 Style="text-align: start;">Évaluez la qualité de l'alimentation de <span className="highlight-green">votre chat</span></h1>
          <button className="main-btn" onClick={() => navigate('/analyse')}>Commencer</button>
        </div>
      </section>

      {/* Section: Meilleures croquettes */}
      <section className="info-section">
        <div className="info-img">
          <img Style="width: 195px;" src={require('../images/illu-home-1.png')} alt="Analytics" />
        </div>
        <div className="info-content">
          <h2>De meilleures croquettes pour chat, <span className="highlight-green">pourquoi&nbsp;?</span></h2>
          <p>Chez nos petits compagnons, une bonne santé est souvent synonyme de bonne alimentation.<br />
          Notre outil analyse gratuitement la nourriture de votre chat en quelques clics et lui attribue une note sur 10 avec ses principales caractéristiques impactant la santé de votre chat.</p>
        </div>
      </section>

      {/* Section: Offre partenaire */}
      <section>
        <div>
          <a href="https://caats.co/" target="_blank" rel="noopener noreferrer">
            <img Style="width: 100%;" src={require('../images/caats-desktop.png')} alt="Caats offer" />
          </a>
        </div>
      </section>

      {/* Section: Bonne nourriture */}
      <section className="info-section alt">
        <div className="info-img">
          <img Style="width: 195px;" src={require('../images/illu-home-2.png')} alt="Cat food" />
        </div>
        <div className="info-content">
          <h2>Une bonne nourriture pour chat, <span className="highlight-green">c'est quoi&nbsp;?</span></h2>
          <p>Le taux de protéines est particulièrement important. Ce taux est souvent beaucoup trop faible parmi les nourritures bon marché ce qui produit des carences alimentaires.<br /><br />
          L'alimentation et son dosage doit aussi être adaptée aux caractéristiques de votre chat : stérilisé ou non, âge, poids, allergies… sont très important pour définir précisément ce dont votre chat a besoin.</p>
          <button className="main-btn" onClick={() => navigate('/analyse')}>Commencer</button>
        </div>       
      </section>

      {/* Section: Hydratation */}
      <section className="info-section">
        <div className="info-img">
          <img Style="width: 100%; max-width: 96px;" src={require('../images/illu-home-3.png')} alt="Water drop" />
        </div>
        <div className="info-content">
          <h2>L'hydratation du chat, un facteur <span className="highlight-green">souvent négligé</span></h2>
          <p>Les chats boivent très peu et s'hydratent très mal. Une mauvaise hydratation aura un impact visible sur la santé de votre chat.<br /><br />
          L'alimentation est le meilleur moyen de garantir la bonne hydratation de votre chat. Un bon mix entre nourriture sèche et humide se révèle être le moyen idéal d'assurer son hydratation.</p>
        </div>
      </section>

      {/* Section: Marque de croquettes */}
      <section className="info-section alt">
        <div className="info-img">
          <img Style="width: 100%; max-width: 142px;" src={require('../images/illu-home-4.png')}  alt="Dog bowl" />
        </div>
        <div className="info-content">
          <h2>Quelles marque de croquettes <span className="highlight-green">choisir&nbsp;?</span></h2>
          <p>Les marques de supermarché ou grand public contiennent souvent trop peu de protéines et ont des compositions de faible qualité.<br /><br />
          Pour les croquettes, nous conseillons d'opter pour des croquettes de "qualité vétérinaire" en portant attention au taux de protéines ainsi qu'à l'origine des aliments.</p>
          <button className="main-btn" onClick={() => navigate('/analyse')}>Commencer</button>
        </div>
      </section>    

      {/* Section: Quantité */}
      <section className="info-section">
        <div className="info-img">
          <img Style="width: 100%; max-width: 96px;" src={require('../images/illu-home-5.png')} alt="Water drop" />
        </div>
        <div className="info-content">
          <h2>Quelle quantité de croquettes et pâtée <span className="highlight-green">donner à mon chat&nbsp;?</span></h2>
          <p>Le dosage de la nourriture est clé pour assurer le poids idéal de votre chat et sa bonne santé.<br /><br />
          Les besoins énergétiques de votre chat varient selon son âge, sa race et son activité. Il est donc très important de doser selon ces critères.</p>
        </div>
      </section>
    </div>
  );
};

export default Home; 