/**
 * ⚠️ DONNÉES DE DÉMONSTRATION ⚠️
 * Base de données factice des croquettes pour chats utilisée à des fins de démonstration
 * Les valeurs nutritionnelles et les descriptions sont fictives
 * 
 * Structure des données pour chaque marque :
 * @property {number} id - Identifiant unique de la marque
 * @property {string} name - Nom commercial du produit
 * @property {string} image - Chemin vers l'image du produit
 * @property {number} proteins - Taux de protéines (en pourcentage) 
 * @property {number} rpc - Rapport Protéino-Calorique
 * @property {number} glucides - Taux de glucides (en pourcentage)
 * @property {number} rpp - Rapport Protéino-Phosphorique
 * @property {number} mineraux - Taux de minéraux (en pourcentage)
 * @property {boolean} sansCereales - Indique si le produit est sans céréales
 * @property {string} description - Description fictive du produit
 * 
 */
const catFoodData = {
  brands: [
    {
      id: 1,
      name: "Affinity Advance - Kitten",
      image: "/data/images/affinity.jpg",
      proteins: 36,
      rpc: 75,
      glucides: 25,
      rpp: 65,
      mineraux: 45,
      sansCereales: false,
      description: "Aliment complet pour chatons jusqu'à 12 mois, riche en protéines pour une croissance optimale."
    },
    {
      id: 2,
      name: "Bozita - Feline Kitten",
      image: "/data/images/bozita.jpg",
      proteins: 34,
      rpc: 70,
      glucides: 28,
      rpp: 60,
      mineraux: 42,
      sansCereales: false,
      description: "Nourriture humide pour chatons, avec une texture en sauce appétissante et une teneur élevée en protéines."
    },
    {
      id: 3,
      name: "Canaillou - Junior",
      image: "/data/images/Canaillou.jpg",
      proteins: 38,
      rpc: 80,
      glucides: 22,
      rpp: 70,
      mineraux: 48,
      sansCereales: true,
      description: "Aliment premium sans céréales pour chatons, avec une forte concentration en protéines animales."
    },
    {
      id: 4,
      name: "Delcon - Kitten Volaille",
      image: "/data/images/Delcon.jpg",
      proteins: 35,
      rpc: 72,
      glucides: 26,
      rpp: 63,
      mineraux: 44,
      sansCereales: false,
      description: "Aliment complet pour chatons à base de volaille, formulé pour soutenir le développement musculaire."
    },
    {
      id: 5,
      name: "Feringa - Kitten Volaille",
      image: "/data/images/Feringa.jpg",
      proteins: 37,
      rpc: 78,
      glucides: 24,
      rpp: 68,
      mineraux: 46,
      sansCereales: true,
      description: "Aliment biologique sans céréales pour chatons, avec une teneur élevée en protéines de volaille de qualité."
    }
  ]
};

module.exports = catFoodData; 