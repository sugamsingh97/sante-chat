// src/components/Footer.js
import React from 'react';
import '../styles/Home.css';

const Footer = () => (
  <footer className="home-footer">
    <div className="footer-content">
      <p>
        Le bien-être et la santé des chats dépendent fortement de leur régime alimentaire. Avec la multitude de produits sur le marché, il est important de se baser sur des critères objectifs comme les rapports Protéido-Calcique (RPC) et Protéido-Phosphorique (RPP), ainsi que d'autres comparaisons basées sur la composition des croquettes de qualité. Notre comparateur est un outil utile pour naviguer dans cette complexité et faire un choix éclairé. Toutefois, il ne s'agit que d'un outil d'aide, il n'indique pas toutes les marques. Nos listes de croquettes sont basées sur la méthodologie présentée sur notre page disclaimer et sur les informations présentes sur le site internet des marques ou des sites internet de leurs revendeurs.
      </p>
      <div className="footer-links">
        <a href="#">sante-chat.com</a> · <a href="#">Mentions légales</a> · <a href="#">Conditions d'utilisation</a> · <a href="#">Clause de non responsabilité</a>
      </div>
      <div className="footer-copyright">
        Copyrights © 2025
      </div>
    </div>
  </footer>
);

export default Footer;