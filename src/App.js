import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [category, setCategory] = useState('general');

  const supportMessages = {
    general: [
      "You are stronger than you think. Every challenge you face is making you more resilient.",
      "It's okay to not be okay. Take your time to heal and grow.",
      "You matter. Your feelings are valid, and you deserve to be happy.",
      "This too shall pass. Dark times don't last forever.",
      "Be gentle with yourself. You're doing the best you can.",
      "You are not alone. Many people care about you, even if it doesn't feel that way right now.",
      "Small steps forward are still progress. Celebrate every victory, no matter how small.",
      "Your story isn't over yet. Better chapters are coming."
    ],
    breakup: [
      "Heartbreak hurts, but it doesn't define you. You are worthy of love and happiness.",
      "It's okay to grieve what you've lost. Healing takes time, and that's perfectly normal.",
      "You deserve someone who chooses you every single day. Don't settle for less.",
      "This ending is making space for new beginnings. Trust the process.",
      "Your value doesn't decrease based on someone's inability to see your worth.",
      "Feel your feelings, but don't let them consume you. You will love and be loved again.",
      "Use this time to rediscover yourself. Fall in love with who you are becoming.",
      "The pain you feel today is the strength you'll feel tomorrow."
    ],
    anxiety: [
      "Take a deep breath. You are safe in this moment.",
      "Anxiety lies. You are capable of handling whatever comes your way.",
      "Progress, not perfection. Be proud of how far you've come.",
      "Your feelings are temporary. This wave of anxiety will pass.",
      "You've survived 100% of your worst days. You're stronger than you know.",
      "It's okay to ask for help. Reaching out is a sign of strength, not weakness.",
      "One step at a time. You don't have to figure everything out right now.",
      "Be kind to your mind. Treat yourself with the compassion you'd give a good friend."
    ],
    motivation: [
      "You are capable of amazing things. Believe in yourself.",
      "Every expert was once a beginner. Keep going.",
      "Your potential is limitless. Don't let fear hold you back.",
      "Difficult roads often lead to beautiful destinations.",
      "You didn't come this far to only come this far. Keep pushing.",
      "Success is the sum of small efforts repeated day in and day out.",
      "Believe you can and you're halfway there.",
      "The only way to do great work is to love what you do. Stay passionate."
    ]
  };

  const getRandomMessage = () => {
    const messages = supportMessages[category];
    const randomIndex = Math.floor(Math.random() * messages.length);
    setCurrentMessage(randomIndex);
  };

  const nextMessage = () => {
    const messages = supportMessages[category];
    setCurrentMessage((prev) => (prev + 1) % messages.length);
  };

  const prevMessage = () => {
    const messages = supportMessages[category];
    setCurrentMessage((prev) => (prev - 1 + messages.length) % messages.length);
  };

  return (
    <div className="App">
      <div className="container">
        <header className="app-header">
          <h1>💙 You're Not Alone</h1>
          <p className="subtitle">Take a moment for yourself</p>
        </header>

        <div className="category-selector">
          <button 
            className={category === 'general' ? 'category-btn active' : 'category-btn'}
            onClick={() => { setCategory('general'); setCurrentMessage(0); }}
          >
            General Support
          </button>
          <button 
            className={category === 'breakup' ? 'category-btn active' : 'category-btn'}
            onClick={() => { setCategory('breakup'); setCurrentMessage(0); }}
          >
            Breakup Healing
          </button>
          <button 
            className={category === 'anxiety' ? 'category-btn active' : 'category-btn'}
            onClick={() => { setCategory('anxiety'); setCurrentMessage(0); }}
          >
            Anxiety Relief
          </button>
          <button 
            className={category === 'motivation' ? 'category-btn active' : 'category-btn'}
            onClick={() => { setCategory('motivation'); setCurrentMessage(0); }}
          >
            Motivation
          </button>
        </div>

        <div className="message-card">
          <div className="message-content">
            <p className="message-text">{supportMessages[category][currentMessage]}</p>
          </div>
          
          <div className="controls">
            <button className="control-btn" onClick={prevMessage}>←</button>
            <button className="control-btn random-btn" onClick={getRandomMessage}>
              ✨ Random Message
            </button>
            <button className="control-btn" onClick={nextMessage}>→</button>
          </div>
        </div>

        <div className="breathing-exercise">
          <h3>Quick Breathing Exercise</h3>
          <p className="breathing-text">Breathe in for 4 seconds... Hold for 4 seconds... Breathe out for 4 seconds</p>
        </div>

        <footer className="app-footer">
          <p>Remember: It's okay to seek professional help. You deserve support and healing.</p>
          <p className="crisis-line">Crisis Line: 988 (US) | Text HOME to 741741</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
