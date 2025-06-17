import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/Result.css';
import CatFoodDetails from '../components/CatFoodDetails';

/**
 * Composant Result
 * Affiche les résultats de l'analyse des croquettes
 * Récupère les données depuis l'API et gère les différents états (chargement, erreur)
 * Utilise le composant CatFoodDetails pour afficher les détails des croquettes
 */
const Result = () => {
    // Récupération des paramètres de navigation et initialisation des états
    const location = useLocation();
    const navigate = useNavigate();
    const { answers, catFoodBrand } = location.state || {};

    // États pour gérer le cycle de vie des données
    const [catFoodDetails, setCatFoodDetails] = useState(null); // Données des croquettes
    const [loading, setLoading] = useState(true); // État de chargement
    const [error, setError] = useState(null); // Gestion des erreurs

    /**
     * Effet pour charger les données des croquettes
     * Fait un appel API pour récupérer les détails de la marque sélectionnée
     * Met à jour les états en fonction du résultat
     */
    useEffect(() => {
        const fetchCatFoodData = async () => {
            try {
                setLoading(true);
                console.log('Fetching cat food data for ID:', catFoodBrand);
                const response = await fetch(`http://localhost:5000/api/cat-food/${catFoodBrand}`);
                console.log('Response status:', response.status);
                
                if (!response.ok) {
                    throw new Error('Failed to fetch cat food data');
                }
                
                const data = await response.json();
                console.log('Received cat food data:', data);
                setCatFoodDetails(data);
            } catch (error) {
                console.error('Error fetching cat food data:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        // Lance la requête uniquement si on a un ID de croquettes
        if (catFoodBrand) {
            fetchCatFoodData();
        }
    }, [catFoodBrand]);

    /**
     * Gestion des différents états d'affichage
     */

    // Cas où les données requises sont manquantes
    if (!answers || !catFoodBrand) {
        return (
            <div className="result-container">
                <h2>No Data Available</h2>
                <p>Please complete the quiz first.</p>
                <button onClick={() => navigate('/')}>Go to Home</button>
            </div>
        );
    }

    // Affichage pendant le chargement des données
    if (loading) {
        return (
            <div className="result-container">
                <h2>Loading...</h2>
            </div>
        );
    }

    // Affichage en cas d'erreur
    if (error) {
        return (
            <div className="result-container">        
                <h2>Error</h2>
                <p>{error}</p>
                <button onClick={() => navigate('/')}>Go to Home</button>
            </div>
        );
    }

    // Affichage principal des résultats
    return (
        <div className="result-container">
            <h2>Résultats de l'analyse</h2>
            {/* Affichage des détails des croquettes si les données sont disponibles */}
            {catFoodDetails && <CatFoodDetails catFoodDetails={catFoodDetails} />}
        </div>
    );
};

export default Result; 