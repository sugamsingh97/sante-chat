/**
 * Serveur Express pour l'application SantéChat
 * Gère les points d'API pour l'analyse des croquettes pour chats
 * 
 * Points d'API actuels :
 * - GET /api/questions : Questions du quiz initial
 * - GET /api/cat-food : Liste des croquettes disponibles
 * - GET /api/cat-food/:id : Détails d'une marque spécifique
 * 
 * Points d'API potentiels à développer :
 * - POST /api/cat-analysis : Analyserait la compatibilité entre un chat et ses croquettes
 *   Prendrait en compte : âge, poids, niveau d'activité, problèmes de santé, etc.
 * - POST /api/cat-profile : Enregistrement du profil d'un chat
 * - PUT /api/cat-profile/:id : Mise à jour du profil
 * - GET /api/recommendations/:catId : Recommandations personnalisées
 * - POST /api/food-comparison : Comparaison détaillée entre différentes marques
 */

const express = require('express');
const cors = require('cors');
const path = require('path');
const quizData = require('./data/quizData');
const catFoodData = require('./data/catFoodData');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());


app.use('/data/images', express.static(path.join(__dirname, 'data/images')));


app.get('/api/questions', (req, res) => {
    res.json(quizData.quiz1);
});

app.get('/api/questions2', (req, res) => {
    res.json(quizData.quiz2);
});

// Récupération de toutes les marques de croquettes
app.get('/api/cat-food', (req, res) => {
    res.json(catFoodData.brands);
});

// Récupération des détails d'une marque spécifique
app.get('/api/cat-food/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const catFood = catFoodData.brands.find(brand => brand.id === id);
    
    if (catFood) {
        res.json(catFood);
    } else {
        res.status(404).json({ error: 'Cat food not found' });
    }
});

/**
 * TODO: Points d'API à implémenter
 * 
 * 1. Analyse de compatibilité
 * POST /api/cat-analysis
 * {
 *   catProfile
 *   foodId
 * Retournerait un score de compatibilité et des recommandations
 * 
 */

// Démarrage du serveur
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 