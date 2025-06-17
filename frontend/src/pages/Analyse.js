import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Question from '../components/Question';
import AnalyseBanner from '../components/AnalyseBanner';
import '../App.css';
import '../styles/Analyse.css';

/**
 * Composant Analyse
 * Gère le questionnaire initial pour collecter les informations sur le chat
 * Affiche les questions de manière séquentielle en fonction des réponses de l'utilisateur
 */
const Analyse = () => {
    // État pour stocker les réponses du questionnaire
    const [answers, setAnswers] = useState({});
    const navigate = useNavigate();

    /**
     * Gère la sélection d'une réponse
     * @param {number} questionNumber - Numéro de la question
     * @param {string} value - Valeur de la réponse sélectionnée
     */
    const handleSelect = (questionNumber, value) => {
        setAnswers(prev => ({ ...prev, [questionNumber]: value }));
    };

    /**
     * Navigue vers l'étape suivante du questionnaire
     * Transmet les réponses via l'état de navigation
     */
    const handleContinue = () => {
        navigate('/analyse-step-2', { state: { answers } });
    };

    return (
        <div Style="width: 100%; padding-left: 5%; padding-right: 5%;">
            {/* Bannière d'en-tête de l'analyse */}
            <AnalyseBanner />

            <div className="quiz-container">
                <div className="question-container">
                    {/* Question 1: Sexe du chat */}
                    <Question
                        number={1}
                        title={<>Décrivez-nous <span className="highlight-green">votre chat</span></>}
                        description="En fonction du profil de votre chat, nous allons étudier la qualité et la compatibilité de ses croquettes"
                        label="Son sexe"
                        options={[
                            { value: 'male', label: "C'est un mâle" },
                            { value: 'female', label: "Une femelle" }
                        ]}
                        selectedOption={answers[1] || null}
                        onSelect={value => handleSelect(1, value)}
                    />

                    {/* Question 2: Âge du chat (affichée uniquement si Q1 est répondue) */}
                    {answers[1] && (
                        <Question
                            number={2}
                            title={<>Quel âge a <span className="highlight-green">votre chat</span> ?</>}
                            description="L'âge de votre chat influence ses besoins nutritionnels."
                            label="Son âge"
                            options={[
                                { value: 'kitten', label: "Moins de 1 an" },
                                { value: 'adult', label: "1 à 7 ans" },
                                { value: 'senior', label: "Plus de 7 ans" }
                            ]}
                            selectedOption={answers[2] || null}
                            onSelect={value => handleSelect(2, value)}
                        />
                    )}

                    {/* Question 3: Statut de stérilisation (affichée uniquement si Q2 est répondue) */}
                    {answers[2] && (
                        <>
                            <Question
                                number={3}
                                title={<>Votre chat est-il <span className="highlight-green">stérilisé</span> ?</>}
                                description="La stérilisation a un impact sur le métabolisme et les besoins énergétiques."
                                label="Stérilisation"
                                options={[
                                    { value: 'yes', label: "Oui" },
                                    { value: 'no', label: "Non" }
                                ]}
                                selectedOption={answers[3] || null}
                                onSelect={value => handleSelect(3, value)}
                            />
                            {/* Bouton de continuation (activé uniquement si toutes les questions sont répondues) */}
                            <div style={{ marginTop: '2rem', textAlign: 'right' }}>
                                <button
                                    className="main-btn"
                                    onClick={handleContinue}
                                    disabled={!answers[1] || !answers[2] || !answers[3]}
                                >
                                    Continuer
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Analyse; 