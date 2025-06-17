import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AnalyseBanner from '../components/AnalyseBanner';
import '../App.css';
import Waiting from './Waiting';

/**
 * Composant AnalyseStep2
 * Deuxième étape de l'analyse qui permet à l'utilisateur de sélectionner
 * la marque de nourriture de son chat parmi une liste de suggestions
 * Inclut une recherche autocomplétée et une validation des données
 */
const AnalyseStep2 = () => {
    // Récupération des réponses précédentes via la navigation
    const location = useLocation();
    const navigate = useNavigate();
    const { answers } = location.state || {};

    // États pour gérer les données et l'interface utilisateur
    const [catFoods, setCatFoods] = useState([]); // Liste complète des marques de nourriture
    const [searchTerm, setSearchTerm] = useState(''); // Terme de recherche
    const [suggestions, setSuggestions] = useState([]); // Suggestions filtrées
    const [selectedBrand, setSelectedBrand] = useState(''); // Marque sélectionnée
    const [showWaiting, setShowWaiting] = useState(false); // État d'attente

    /**
     * Effet pour charger la liste des marques de nourriture au montage du composant
     * Fait un appel API pour récupérer toutes les marques disponibles
     */
    useEffect(() => {
        const fetchCatFoods = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/cat-food');
                if (!response.ok) {
                    throw new Error('Failed to fetch cat food data');
                }
                const data = await response.json();
                setCatFoods(data);
            } catch (err) {
                console.error('Error fetching cat food data:', err);
            }
        };

        fetchCatFoods();
    }, []);

    /**
     * Gère les changements dans le champ de recherche
     * Filtre les suggestions en fonction du texte saisi
     * @param {Event} e - L'événement de changement
     */
    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        
        if (value.length > 0) {
            const filteredSuggestions = catFoods.filter(food => 
                food.name.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    /**
     * Gère la sélection d'une suggestion dans la liste
     * @param {Object} brand - La marque sélectionnée
     */
    const handleSuggestionClick = (brand) => {
        setSelectedBrand(brand.name);
        setSearchTerm(brand.name);
        setSuggestions([]);
    };

    /**
     * Gère la soumission du formulaire
     * Prépare les données pour la navigation vers les résultats
     * @param {Event} e - L'événement de soumission
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedBrand) {
            const selectedFood = catFoods.find(food => food.name === selectedBrand);
            if (selectedFood) {
                setShowWaiting(true);
                setTimeout(() => {
                    navigate('/result', { 
                        state: { 
                            answers: {
                                age: answers[1],
                                sterilized: answers[2],
                                healthIssues: answers[3],
                                weight: answers[4],
                                activityLevel: answers[5],
                                foodPreferences: answers[6]
                            },
                            catFoodBrand: selectedFood.id
                        } 
                    });
                }, 3000);
            }
        }
    };

    // Affichage si aucune réponse précédente n'est disponible
    if (!answers) {
        return (
            <div className="quiz-container">
                <AnalyseBanner />
                <h2>Analyse - Étape 2</h2>
                <p>Aucune réponse disponible</p>
                <button onClick={() => navigate('/analyse')} className="button">
                    Retour à l'analyse
                </button>
            </div>
        );
    }

    // Affichage de l'écran d'attente pendant le chargement des résultats
    if (showWaiting) {
        return <Waiting />;
    }

    // Affichage principal du formulaire de recherche
    return (
        <div Style="width: 100%; padding-left: 5%; padding-right: 5%;">
            <AnalyseBanner />
            <div className="quiz-container">
                <h2>Analyse - Alimentation</h2>
                <form onSubmit={handleSubmit} className="food-form">
                    <div className="form-group">
                        <label htmlFor="food">Quelle marque de nourriture votre chat mange-t-il ?</label>
                        <input
                            type="text"
                            id="food"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            placeholder="Ex: Royal Canin, Purina..."
                            required
                        />
                        {/* Liste des suggestions */}
                        {suggestions.length > 0 && (
                            <div className="suggestions">
                                {suggestions.map((food) => (
                                    <div
                                        key={food.id}
                                        className="suggestion-item"
                                        onClick={() => handleSuggestionClick(food)}
                                    >
                                        {food.name}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <button className="main-btn" type="submit" disabled={!selectedBrand}>
                        Voir les résultats
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AnalyseStep2; 