const quizData = {
  quiz1: [
    {
      id: 1,
      question: "Quel âge a votre chat ?",
      options: [
        { text: "Moins de 1 an", next: 2 },
        { text: "1 à 7 ans", next: 2 },
        { text: "Plus de 7 ans", next: 2 }
      ]
    },
    {
      id: 2,
      question: "Votre chat est-il stérilisé ?",
      options: [
        { text: "Oui", next: 3 },
        { text: "Non", next: 3 }
      ]
    },
    {
      id: 3,
      question: "Votre chat a-t-il des problèmes de santé ?",
      options: [
        { text: "Oui", next: null },
        { text: "Non", next: null }
      ]
    }
  ]
};

module.exports = quizData; 