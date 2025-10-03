import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [category, setCategory] = useState('general');
  const [showActivities, setShowActivities] = useState(false);
  const [showQuotes, setShowQuotes] = useState(false);

  const supportMessages = {
    general: [
      "You are stronger than you think. Every challenge you face is making you more resilient.",
      "It's okay to not be okay. Take your time to heal and grow.",
      "You matter. Your feelings are valid, and you deserve to be happy.",
      "This too shall pass. Dark times don't last forever.",
      "Be gentle with yourself. You're doing the best you can.",
      "You are not alone. Many people care about you, even if it doesn't feel that way right now.",
      "Small steps forward are still progress. Celebrate every victory, no matter how small.",
      "Your story isn't over yet. Better chapters are coming.",
      "You deserve peace, joy, and all the good things life has to offer.",
      "Sometimes the bravest thing you can do is keep going when you want to give up.",
      "Your mental health is just as important as your physical health. Take care of yourself.",
      "It's okay to rest. You don't have to be productive all the time.",
      "You're allowed to take up space. You're allowed to have a voice.",
      "Every day you get through is a victory. Be proud of yourself.",
      "You don't have to have it all figured out right now. Just take it one moment at a time.",
      "Your journey is unique. Don't compare your chapter 1 to someone else's chapter 20.",
      "Healing isn't linear. Some days will be harder than others, and that's perfectly okay.",
      "You are worthy of love, respect, and kindness - especially from yourself.",
      "The fact that you're still trying is something to be proud of.",
      "You've overcome challenges before. You can do it again.",
      "Your feelings are messengers. Listen to them with compassion.",
      "It's okay to put yourself first. That's not selfish, that's self-care.",
      "You are doing better than you think you are.",
      "Tomorrow is a new day with new possibilities.",
      "You are enough, exactly as you are right now.",
      "Your past does not define your future. Every moment is a chance to begin again.",
      "Sometimes falling apart is the first step to falling into place.",
      "You don't owe anyone an explanation for taking care of yourself.",
      "Your worth is not measured by your productivity or achievements.",
      "It's okay to have bad days. They don't erase your progress.",
      "You're not a burden. Your needs and feelings matter.",
      "Asking for help is a strength, not a weakness.",
      "You have survived everything life has thrown at you so far. That's powerful.",
      "Your pace doesn't matter. Forward is forward, no matter how slow.",
      "You are allowed to change your mind, change your path, and change your life.",
      "The storm you're in today will pass. Hold on.",
      "Your struggles don't make you weak. They show how strong you've been for so long.",
      "It's okay to prioritize your peace over other people's expectations.",
      "You are not 'too sensitive' or 'too much.' You are human.",
      "Every sunrise is a reminder that you can start fresh.",
      "Your mental health journey is valid, regardless of what it looks like.",
      "You don't have to smile through the pain. It's okay to acknowledge when you're hurting.",
      "Being kind to yourself isn't indulgent. It's necessary.",
      "You are worthy of good things, even on your worst days.",
      "Progress isn't always visible, but it's still happening.",
      "Your boundaries are important and deserve to be respected.",
      "You are more than your diagnosis, your struggles, or your bad days.",
      "It takes courage to feel your feelings instead of running from them.",
      "You deserve support, understanding, and compassion on your healing journey.",
      "Remember: you are a work in progress, and that's perfectly okay."
    ],
    breakup: [
      "Heartbreak hurts, but it doesn't define you. You are worthy of love and happiness.",
      "It's okay to grieve what you've lost. Healing takes time, and that's perfectly normal.",
      "You deserve someone who chooses you every single day. Don't settle for less.",
      "This ending is making space for new beginnings. Trust the process.",
      "Your value doesn't decrease based on someone's inability to see your worth.",
      "Feel your feelings, but don't let them consume you. You will love and be loved again.",
      "Use this time to rediscover yourself. Fall in love with who you are becoming.",
      "The pain you feel today is the strength you'll feel tomorrow.",
      "Sometimes good things fall apart so better things can fall together.",
      "You can't start the next chapter if you keep re-reading the last one.",
      "The right person will love you for exactly who you are. No exceptions.",
      "Closure comes from within. You don't need their permission to move on.",
      "Your heart is healing, even on days when it doesn't feel like it.",
      "Being alone is better than being with someone who makes you feel alone.",
      "You didn't lose someone who loved you. You lost someone who didn't know how to love you.",
      "This breakup is redirecting you to something better. Trust the journey.",
      "You are not 'too much' or 'not enough.' You are perfectly you.",
      "Let go of what hurt you, but never forget what it taught you.",
      "Your happily ever after doesn't require them in it.",
      "Healing means letting go of the person you thought they were and accepting who they actually are.",
      "You will find someone who sees your value and never makes you question it.",
      "Sometimes the most loving thing you can do is walk away.",
      "You're not broken. You're breaking free.",
      "The end of one story is the beginning of another. Your best chapters are still ahead.",
      "You will laugh again. You will love again. You will feel whole again.",
      "Don't beg for someone to stay who wants to leave. Let them go and make room for someone who will stay.",
      "You can't force someone to appreciate you. The right person will see your worth without convincing.",
      "Every ending is painful, but it also teaches you something about yourself.",
      "You're not losing love. You're gaining yourself back.",
      "The person who left wasn't your person. Your person wouldn't leave.",
      "It's okay to miss them and still know letting go was the right choice.",
      "You deserve a love that feels safe, not stressful.",
      "Stop watering dead plants. Invest your energy in relationships that grow.",
      "Their loss of you will be greater than your loss of them. Wait and see.",
      "You can't heal in the same environment that made you sick. Sometimes distance is medicine.",
      "The ending hurt, but staying would have hurt more. You chose yourself.",
      "You're allowed to outgrow people who no longer align with your growth.",
      "Real love doesn't require you to shrink yourself or walk on eggshells.",
      "You gave it your all. That's all anyone can do. Now it's time to give that energy to yourself.",
      "The right relationship won't feel like a constant battle. Let this one go.",
      "Breakups break you open, not apart. You're discovering new depths of yourself.",
      "You don't need closure from them. You need to close that door yourself.",
      "They showed you who they are. Believe them and move forward.",
      "Your future love story will thank you for not settling for this one.",
      "You're not starting over. You're starting fresh with more wisdom and self-respect.",
      "The pain of staying was greater than the pain of leaving. You made the brave choice.",
      "You will look back one day and be grateful this didn't work out.",
      "Your heart may be broken, but it's still beating. You're still here, and that matters.",
      "This person was a chapter, not your whole story. Turn the page.",
      "You are complete on your own. A partner should complement you, not complete you."
    ],
    anxiety: [
      "Take a deep breath. You are safe in this moment.",
      "Anxiety lies. You are capable of handling whatever comes your way.",
      "Progress, not perfection. Be proud of how far you've come.",
      "Your feelings are temporary. This wave of anxiety will pass.",
      "You've survived 100% of your worst days. You're stronger than you know.",
      "It's okay to ask for help. Reaching out is a sign of strength, not weakness.",
      "One step at a time. You don't have to figure everything out right now.",
      "Be kind to your mind. Treat yourself with the compassion you'd give a good friend.",
      "Worrying won't stop bad things from happening. It just stops you from enjoying the good.",
      "You don't have to be in control of everything. It's okay to let go.",
      "Your anxiety does not define you. You are so much more than your fears.",
      "Breathe. You've got this, even when it doesn't feel like it.",
      "It's okay if all you did today was survive. That's enough.",
      "Your mind might be racing, but your heart knows you'll be okay.",
      "Anxiety is uncomfortable, but it can't actually hurt you. You are safe.",
      "You don't need to fight your anxious thoughts. Observe them and let them pass.",
      "Ground yourself in this moment. What you're imagining hasn't happened.",
      "It's okay to take a step back and catch your breath.",
      "You are not your anxiety. You are the person experiencing it, and you can get through it.",
      "Every anxious moment you've survived has made you stronger.",
      "This feeling is temporary. You will feel calm again.",
      "You don't have to have all the answers right now. Just focus on this moment.",
      "Your anxiety is lying to you. You are capable and you are enough.",
      "Be patient with yourself. You're doing the best you can with what you have.",
      "You are allowed to feel anxious and still be strong. They can coexist.",
      "Your body is trying to protect you. Thank it, and remind it that you're safe.",
      "Anxiety doesn't mean something is wrong with you. It means you're human.",
      "You've made it through every panic attack before. You'll make it through this one too.",
      "It's okay to cancel plans, take a break, or say no when anxiety is high.",
      "Your worth doesn't decrease when you're anxious. You're still valuable.",
      "Breathing deeply activates your calm. Inhale peace, exhale tension.",
      "You can feel anxious and still take action. Courage isn't the absence of fear.",
      "This anxious feeling is temporary. You are permanent. You will outlast this.",
      "It's okay to not be okay. You don't have to pretend everything is fine.",
      "Your nervous system is doing its job. You can help it calm down with gentle self-care.",
      "Anxiety is a feeling, not a fact. Don't believe everything you think.",
      "You are safe. You are here. You are breathing. That's all you need right now.",
      "Some days require coffee and courage. Today might be one of those days, and that's okay.",
      "Your anxious thoughts are not predictions. They're just thoughts.",
      "It's okay to take things slowly when you're feeling overwhelmed.",
      "You don't owe productivity to anyone, especially when you're struggling.",
      "Anxiety can make mountains out of molehills. Step back and reassess.",
      "You are not alone in this. Millions of people understand what you're going through.",
      "It's okay to ask for reassurance when you need it. That's not weakness.",
      "Your feelings are valid, even if they seem irrational. Feel them anyway.",
      "You can't control everything, and that's actually a relief once you accept it.",
      "Anxiety thrives on 'what if.' Bring yourself back to 'what is.'",
      "You've been anxious before and survived. You'll survive this too.",
      "It's okay to take a mental health day. Rest is productive.",
      "You are doing the best you can, and that is always enough."
    ],
    motivation: [
      "You are capable of amazing things. Believe in yourself.",
      "Every expert was once a beginner. Keep going.",
      "Your potential is limitless. Don't let fear hold you back.",
      "Difficult roads often lead to beautiful destinations.",
      "You didn't come this far to only come this far. Keep pushing.",
      "Success is the sum of small efforts repeated day in and day out.",
      "Believe you can and you're halfway there.",
      "The only way to do great work is to love what you do. Stay passionate.",
      "Your only limit is you. Get out of your own way.",
      "Don't wait for opportunity. Create it.",
      "Every accomplishment starts with the decision to try.",
      "The harder you work for something, the greater you'll feel when you achieve it.",
      "Your dreams don't have an expiration date. Take a deep breath and try again.",
      "The only impossible journey is the one you never begin.",
      "You are never too old to set another goal or to dream a new dream.",
      "Success doesn't come from what you do occasionally. It comes from what you do consistently.",
      "The future depends on what you do today. Make it count.",
      "Don't stop until you're proud.",
      "Your life does not get better by chance. It gets better by change.",
      "The secret to getting ahead is getting started.",
      "You miss 100% of the shots you don't take. Shoot your shot.",
      "Be stronger than your excuses.",
      "Great things never come from comfort zones. Push yourself.",
      "The only person you should try to be better than is the person you were yesterday.",
      "Your goals are waiting for you. Go get them.",
      "Fall seven times, stand up eight. Never give up.",
      "You have within you right now, everything you need to deal with whatever comes your way.",
      "The best time to plant a tree was 20 years ago. The second best time is now.",
      "Don't watch the clock. Do what it does. Keep going.",
      "Your effort will never betray you. Keep working hard.",
      "Doubt kills more dreams than failure ever will. Believe in yourself.",
      "You don't need to be perfect. You just need to start.",
      "Small daily improvements lead to stunning long-term results.",
      "The difference between who you are and who you want to be is what you do.",
      "If it doesn't challenge you, it doesn't change you.",
      "Success is not final, failure is not fatal. It's the courage to continue that counts.",
      "Your comfort zone is a beautiful place, but nothing grows there.",
      "Stop doubting yourself. Work hard and make it happen.",
      "The pain you feel today will be the strength you feel tomorrow.",
      "Wake up with determination. Go to bed with satisfaction.",
      "You don't find willpower, you create it. Start now.",
      "Every champion was once a contender who refused to give up.",
      "Your potential is endless. Go do what you were created to do.",
      "Action is the foundational key to all success.",
      "You are one decision away from a totally different life.",
      "Don't limit your challenges. Challenge your limits.",
      "The struggle you're in today is developing the strength you need tomorrow.",
      "Be patient with yourself. Nothing in nature blooms all year.",
      "Your goals don't care how you feel. Get up and get after them.",
      "You can't go back and change the beginning, but you can start where you are and change the ending."
    ]
  };

  const inspirationalQuotes = [
    { quote: "The only way out is through.", author: "Robert Frost" },
    { quote: "You are not your thoughts. You are the observer of your thoughts.", author: "Amit Ray" },
    { quote: "Healing takes time, and asking for help is a courageous step.", author: "Mariska Hargitay" },
    { quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { quote: "You don't have to control your thoughts. You just have to stop letting them control you.", author: "Dan Millman" },
    { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { quote: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
    { quote: "It's okay to be a glowstick; sometimes we need to break before we shine.", author: "Unknown" },
    { quote: "Your present circumstances don't determine where you can go; they merely determine where you start.", author: "Nido Qubein" },
    { quote: "The wound is the place where the Light enters you.", author: "Rumi" },
    { quote: "You are braver than you believe, stronger than you seem, and smarter than you think.", author: "A.A. Milne" },
    { quote: "Rock bottom became the solid foundation on which I rebuilt my life.", author: "J.K. Rowling" }
  ];

  const activities = [
    {
      title: "5-Minute Journaling",
      description: "Write down three things you're grateful for and one positive thing about yourself.",
      icon: "📝"
    },
    {
      title: "Mindful Walking",
      description: "Take a 10-minute walk outside. Focus on the sights, sounds, and sensations around you.",
      icon: "🚶"
    },
    {
      title: "Creative Expression",
      description: "Draw, paint, or doodle for 15 minutes. Don't judge yourself - just create!",
      icon: "🎨"
    },
    {
      title: "Music Therapy",
      description: "Create a playlist of songs that make you feel empowered and listen mindfully.",
      icon: "🎵"
    },
    {
      title: "Body Scan Meditation",
      description: "Lie down and mentally scan your body from head to toe, releasing tension.",
      icon: "🧘"
    },
    {
      title: "Connect with Nature",
      description: "Spend time with plants, watch clouds, or observe wildlife. Nature heals.",
      icon: "🌿"
    },
    {
      title: "Random Act of Kindness",
      description: "Do something nice for someone else. Helping others helps us too.",
      icon: "💝"
    },
    {
      title: "Digital Detox Hour",
      description: "Turn off all devices for one hour. Read, stretch, or just be present.",
      icon: "📵"
    },
    {
      title: "Letter to Future Self",
      description: "Write a letter to yourself one year from now. What do you hope to tell them?",
      icon: "✉️"
    },
    {
      title: "Progressive Muscle Relaxation",
      description: "Tense and release each muscle group, starting from your toes to your head.",
      icon: "💪"
    }
  ];

  const exercises = {
    breathing: [
      {
        name: "4-7-8 Breathing",
        steps: "Breathe in for 4 seconds → Hold for 7 seconds → Exhale for 8 seconds. Repeat 4 times.",
        benefit: "Reduces anxiety and helps you fall asleep"
      },
      {
        name: "Box Breathing",
        steps: "Breathe in for 4 → Hold for 4 → Breathe out for 4 → Hold for 4. Repeat.",
        benefit: "Used by Navy SEALs to stay calm under pressure"
      },
      {
        name: "Diaphragmatic Breathing",
        steps: "Place one hand on chest, one on belly. Breathe deeply so only your belly rises.",
        benefit: "Activates the body's relaxation response"
      }
    ],
    grounding: [
      {
        name: "5-4-3-2-1 Technique",
        steps: "Name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste.",
        benefit: "Brings you back to the present moment"
      },
      {
        name: "Physical Grounding",
        steps: "Press your feet firmly into the ground. Feel the surface beneath you. You are here, you are safe.",
        benefit: "Reconnects you with your body and surroundings"
      }
    ]
  };

  const getRandomMessage = () => {
    const messages = supportMessages[category];
    const randomIndex = Math.floor(Math.random() * messages.length);
    setCurrentMessage(randomIndex);
  };

  return (
    <div className="App">
      <div className="container">
        <header className="app-header">
          <h1>✨ Wellness & Support Hub</h1>
          <p className="subtitle">Your journey to healing and growth starts here</p>
        </header>

        <div className="category-selector">
          <button 
            className={category === 'general' ? 'category-btn active' : 'category-btn'}
            onClick={() => { setCategory('general'); setCurrentMessage(0); }}
          >
            💙 General Support
          </button>
          <button 
            className={category === 'breakup' ? 'category-btn active' : 'category-btn'}
            onClick={() => { setCategory('breakup'); setCurrentMessage(0); }}
          >
            💔 Breakup Healing
          </button>
          <button 
            className={category === 'anxiety' ? 'category-btn active' : 'category-btn'}
            onClick={() => { setCategory('anxiety'); setCurrentMessage(0); }}
          >
            🌊 Anxiety Relief
          </button>
          <button 
            className={category === 'motivation' ? 'category-btn active' : 'category-btn'}
            onClick={() => { setCategory('motivation'); setCurrentMessage(0); }}
          >
            🚀 Motivation
          </button>
        </div>

        <div className="message-card">
          <div className="message-content">
            <p className="message-text">{supportMessages[category][currentMessage]}</p>
          </div>
          
          <div className="controls">
            <button className="control-btn random-btn" onClick={getRandomMessage}>
              ✨ Get New Message
            </button>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="quick-actions">
          <button 
            className="action-btn"
            onClick={() => { setShowActivities(!showActivities); setShowQuotes(false); }}
          >
            {showActivities ? '📚 Hide Activities' : '🎯 Explore Activities'}
          </button>
          <button 
            className="action-btn"
            onClick={() => { setShowQuotes(!showQuotes); setShowActivities(false); }}
          >
            {showQuotes ? '💭 Hide Quotes' : '💫 Inspirational Quotes'}
          </button>
        </div>

        {/* Activities Section */}
        {showActivities && (
          <div className="activities-section">
            <h2 className="section-title">💡 Helpful Activities & Ideas</h2>
            <div className="activities-grid">
              {activities.map((activity, index) => (
                <div key={index} className="activity-card">
                  <div className="activity-icon">{activity.icon}</div>
                  <h3 className="activity-title">{activity.title}</h3>
                  <p className="activity-description">{activity.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quotes Section */}
        {showQuotes && (
          <div className="quotes-section">
            <h2 className="section-title">💫 Words of Wisdom</h2>
            <div className="quotes-grid">
              {inspirationalQuotes.map((item, index) => (
                <div key={index} className="quote-card">
                  <p className="quote-text">"{item.quote}"</p>
                  <p className="quote-author">— {item.author}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Breathing Exercises */}
        <div className="exercises-section">
          <h2 className="section-title">🌬️ Breathing Exercises</h2>
          <div className="exercise-grid">
            {exercises.breathing.map((exercise, index) => (
              <div key={index} className="exercise-card">
                <h3 className="exercise-name">{exercise.name}</h3>
                <p className="exercise-steps">{exercise.steps}</p>
                <p className="exercise-benefit">✨ {exercise.benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Grounding Techniques */}
        <div className="exercises-section">
          <h2 className="section-title">🌍 Grounding Techniques</h2>
          <div className="exercise-grid">
            {exercises.grounding.map((exercise, index) => (
              <div key={index} className="exercise-card">
                <h3 className="exercise-name">{exercise.name}</h3>
                <p className="exercise-steps">{exercise.steps}</p>
                <p className="exercise-benefit">✨ {exercise.benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Knowledge Section */}
        <div className="knowledge-section">
          <h2 className="section-title">📖 Helpful Knowledge</h2>
          <div className="knowledge-grid">
            <div className="knowledge-card">
              <h3>🧠 Understanding Your Mind</h3>
              <p>Your brain is designed to keep you safe, which sometimes means being overly cautious. Anxiety is your brain's alarm system - it's trying to protect you, even when there's no real danger.</p>
            </div>
            <div className="knowledge-card">
              <h3>💪 Building Resilience</h3>
              <p>Resilience isn't about bouncing back instantly. It's about allowing yourself to bend in the storm and gradually finding your strength again. Every small step counts.</p>
            </div>
            <div className="knowledge-card">
              <h3>🌱 Growth Mindset</h3>
              <p>Challenges are opportunities for growth. When you embrace discomfort as a teacher rather than an enemy, you open yourself to incredible transformation.</p>
            </div>
            <div className="knowledge-card">
              <h3>❤️ Self-Compassion</h3>
              <p>Treat yourself like you would treat a good friend. You deserve the same kindness, patience, and understanding that you freely give to others.</p>
            </div>
            <div className="knowledge-card">
              <h3>🎯 Small Wins Matter</h3>
              <p>Getting out of bed, taking a shower, eating a meal - these aren't small achievements when you're struggling. Celebrate every victory.</p>
            </div>
            <div className="knowledge-card">
              <h3>🌈 Hope is Real</h3>
              <p>Healing isn't linear. You'll have good days and hard days. But with time, the good days will outnumber the hard ones. Keep going.</p>
            </div>
          </div>
        </div>

        <footer className="app-footer">
          <p className="footer-message">💜 Remember: It's okay to seek professional help. You deserve support and healing.</p>
          <div className="crisis-contacts">
            <p className="crisis-line"><strong>🆘 New Zealand Crisis Support</strong></p>
            <p className="support-number">📞 <strong>Lifeline:</strong> 0800 543 354 (available 24/7)</p>
            <p className="support-number">📞 <strong>Suicide Crisis Helpline:</strong> 0508 828 865 (0508 TAUTOKO)</p>
            <p className="support-number">💬 <strong>1737:</strong> Free call or text for mental health support (24/7)</p>
            <p className="support-number">📞 <strong>Samaritans:</strong> 0800 726 666</p>
            <p className="support-number">📞 <strong>Depression Helpline:</strong> 0800 111 757</p>
            <p className="support-number">📞 <strong>Youthline:</strong> 0800 376 633 | Text 234 | Email talk@youthline.co.nz</p>
          </div>
          <p className="footer-note">You are not alone. Your story matters. Your life has value.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
