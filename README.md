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

### `npm test`

Lance le lanceur de tests en mode interactif.\
Consultez la section [Exécution des tests](https://facebook.github.io/create-react-app/docs/running-tests) pour plus d'informations.

### `npm run build`

Compile l'application pour la production dans le dossier `build`.\
Il intègre correctement React en mode production et optimise le build pour des performances optimales.

Le build est minifié et les noms de fichiers incluent les hachages.\
Votre application est prête à être déployée !

Consultez la section sur le [déploiement](https://facebook.github.io/create-react-app/docs/deployment) pour plus d'informations.

### `npm run eject`

**Remarque : cette opération est unidirectionnelle. Une fois `eject` effectuée, vous ne pouvez plus revenir en arrière !**

Si vous n'êtes pas satisfait de l'outil de build et des choix de configuration, vous pouvez `eject` à tout moment. Cette commande supprimera la dépendance de build de votre projet.

Au lieu de cela, elle copiera tous les fichiers de configuration et les dépendances transitives (webpack, Babel, ESLint, etc.) directement dans votre projet, vous permettant ainsi d'en avoir le contrôle total. Toutes les commandes, à l'exception de `eject`, fonctionneront toujours, mais elles pointeront vers les scripts copiés afin que vous puissiez les modifier. À ce stade, vous êtes seul.

Vous n'avez pas besoin d'utiliser `eject`. L'ensemble de fonctionnalités est adapté aux petits et moyens déploiements, et vous ne devriez pas vous sentir obligé de l'utiliser. Cependant, nous comprenons que cet outil ne soit pas utile si vous ne pouvez pas le personnaliser lorsque vous le souhaitez.

## En savoir plus

Pour en savoir plus, consultez la documentation « Créer une application React » (https://facebook.github.io/create-react-app/docs/getting-started).

Pour apprendre React, consultez la documentation « React » (https://reactjs.org/).

### Découpage du code

Cette section a été déplacée ici : [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyse de la taille du bundle

Cette section a été déplacée ici : [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Création d'une application web progressive

Cette section a été déplacée ici : [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Configuration avancée

Cette section a été déplacée Ici : [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Déploiement

Cette section a été déplacée ici : [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### Échec de la minification de `npm run build`

Cette section a été déplacée ici : [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
