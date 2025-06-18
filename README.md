# Application Quiz Santé Chat

Une application quiz pour des recommandations sur la santé des chats.

## Structure du projet
```
sante-chat/
├── frontend/ # Application frontend React
│ ├── public/
│ ├── src/
│ ├── package.json
│ └── README.md
│
└── backend/ # Serveur backend Express
├── data/
├── server.js
└── package.json
```

## Instructions d'installation

### Configuration du backend
1. Accédez au répertoire du backend :
```bash
cd backend
```
2. Installez les dépendances :
```bash
npm install
```
3. Démarrez le Serveur :
```bash
npm run dev
```
Le backend s'exécutera sur http://localhost:5000

### Configuration du frontend
1. Accédez au répertoire du frontend :
```bash
cd frontend
```
2. Installez les dépendances :
```bash
npm install
```
3. Démarrez le serveur de développement :
```bash
npm start
```
Le frontend s'exécutera sur http://localhost:3000

## Fonctionnalités
- Interface de quiz interactive
- Plusieurs types de questions
- Traitement des réponses en temps réel
- Design réactif
- Intégration de l'API backend

# Premiers pas avec Create React App

Ce projet a été démarré avec [Create React App](https://github.com/facebook/create-react-app).

## Scripts disponibles

Dans le répertoire du projet, vous pouvez exécuter :

### `npm start`

Exécute l'application en mode développement.\
Ouvrez [http://localhost:3000](http://localhost:3000) pour l'afficher dans votre navigateur.

La page se rechargera lorsque vous apporterez des modifications.\
Vous pouvez également voir des erreurs de lint dans la console.
