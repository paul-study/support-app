// Navigation
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const section = btn.dataset.section;
        
        // Update active states
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
        
        btn.classList.add('active');
        document.getElementById(section).classList.add('active');
    });
});

// Local Storage Helper
const storage = {
    get: (key) => JSON.parse(localStorage.getItem(key) || '[]'),
    set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
    append: (key, value) => {
        const items = storage.get(key);
        items.push(value);
        storage.set(key, items);
    }
};

// Breathing Exercise
let breathingInterval;
function startBreathing() {
    const modal = document.getElementById('breathing-modal');
    const circle = document.getElementById('breathing-circle');
    const text = document.getElementById('breathing-text');
    const instruction = document.getElementById('breathing-instruction');
    
    modal.classList.add('active');
    let phase = 0;
    
    const breathe = () => {
        if (phase === 0) {
            circle.classList.remove('exhale');
            circle.classList.add('inhale');
            text.textContent = 'Breathe In';
            instruction.textContent = 'Slowly breathe in through your nose...';
        } else if (phase === 1) {
            text.textContent = 'Hold';
            instruction.textContent = 'Hold your breath...';
        } else if (phase === 2) {
            circle.classList.remove('inhale');
            circle.classList.add('exhale');
            text.textContent = 'Breathe Out';
            instruction.textContent = 'Slowly breathe out through your mouth...';
        } else {
            text.textContent = 'Hold';
            instruction.textContent = 'Hold...';
        }
        
        phase = (phase + 1) % 4;
    };
    
    breathe();
    breathingInterval = setInterval(breathe, 4000);
}

// Gratitude Journal
function openGratitude() {
    document.getElementById('gratitude-modal').classList.add('active');
    displayGratitudeEntries();
}

function saveGratitude() {
    const text = document.getElementById('gratitude-text').value.trim();
    if (text) {
        const entry = {
            text: text,
            date: new Date().toISOString()
        };
        storage.append('gratitude', entry);
        document.getElementById('gratitude-text').value = '';
        displayGratitudeEntries();
        alert('Gratitude entry saved! 🙏');
    }
}

function displayGratitudeEntries() {
    const entries = storage.get('gratitude').slice(-5).reverse();
    const container = document.getElementById('gratitude-entries');
    
    container.innerHTML = entries.map(entry => `
        <div class="gratitude-entry">
            <div class="date">${new Date(entry.date).toLocaleDateString()}</div>
            <div>${entry.text}</div>
        </div>
    `).join('');
}

// Affirmations
const affirmations = [
    "You are capable of amazing things.",
    "Your feelings are valid and important.",
    "You deserve happiness and peace.",
    "Every day is a new opportunity to grow.",
    "You are stronger than you think.",
    "It's okay to take things one step at a time.",
    "You are worthy of love and respect.",
    "Your mental health matters.",
    "You have the power to create change.",
    "You are enough, just as you are.",
    "Progress, not perfection.",
    "You are resilient and brave.",
    "It's okay to ask for help.",
    "You are making a difference.",
    "Your journey is unique and valuable.",
    "You have overcome challenges before, and you can do it again.",
    "Self-care is not selfish.",
    "You are worthy of rest and relaxation.",
    "Your story matters.",
    "You bring light to the world."
];

function showAffirmation() {
    const modal = document.getElementById('affirmation-modal');
    const text = document.getElementById('affirmation-text');
    const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
    
    text.textContent = `"${randomAffirmation}"`;
    modal.classList.add('active');
}

// Mindfulness Exercise
let mindfulnessStep = 0;
const mindfulnessSteps = [
    "Find a comfortable position and close your eyes if you feel comfortable.",
    "Notice five things you can see around you. Take your time with each one.",
    "Now notice four things you can touch. Feel their texture.",
    "Notice three things you can hear. Listen carefully.",
    "Notice two things you can smell. Take a deep breath.",
    "Notice one thing you can taste.",
    "Take three deep breaths, focusing on the sensation of breathing.",
    "Slowly open your eyes and return to the present moment.",
    "Well done! You've completed the mindfulness exercise. 🌟"
];

function startMindfulness() {
    mindfulnessStep = 0;
    document.getElementById('mindfulness-modal').classList.add('active');
    document.getElementById('mindfulness-btn').textContent = 'Start';
    nextMindfulness();
}

function nextMindfulness() {
    const instruction = document.getElementById('mindfulness-instruction');
    const btn = document.getElementById('mindfulness-btn');
    
    if (mindfulnessStep < mindfulnessSteps.length) {
        instruction.textContent = mindfulnessSteps[mindfulnessStep];
        btn.textContent = mindfulnessStep === mindfulnessSteps.length - 1 ? 'Finish' : 'Next';
        mindfulnessStep++;
    } else {
        closeModal('mindfulness-modal');
    }
}

// Movement Break
function startMovement() {
    const movements = [
        "Stand up and stretch your arms above your head - 10 seconds",
        "Roll your shoulders backward 5 times",
        "Do 10 jumping jacks or march in place",
        "Stretch each leg for 10 seconds",
        "Take 5 deep breaths while walking around",
        "Shake out your hands and arms",
        "Great job! You've completed your movement break! 💪"
    ];
    
    let step = 0;
    const interval = setInterval(() => {
        if (step < movements.length) {
            alert(movements[step]);
            step++;
        } else {
            clearInterval(interval);
        }
    }, 100);
}

// Creative Expression
function openCreative() {
    alert("Opening creative space... 🎨\n\nTake a moment to:\n- Draw in a sketchbook\n- Write in your journal\n- Create something with your hands\n- Express yourself freely\n\nThere's no right or wrong way to be creative!");
}

// Nature Sounds
function playNatureSounds() {
    const sounds = [
        "🌊 Ocean Waves - Imagine the sound of gentle waves",
        "🌧️ Rain Sounds - Picture peaceful rainfall",
        "🐦 Bird Songs - Hear the morning birds chirping",
        "🌲 Forest Ambience - Feel the calm of the forest",
        "💧 Stream Flowing - Listen to water flowing gently"
    ];
    
    const sound = sounds[Math.floor(Math.random() * sounds.length)];
    alert(`Now playing: ${sound}\n\nClose your eyes and imagine this peaceful sound for a few moments...`);
}

// Reading Corner
function showReading() {
    const quotes = [
        {
            text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
            author: "Nelson Mandela"
        },
        {
            text: "Your mental health is a priority. Your happiness is essential. Your self-care is a necessity.",
            author: "Anonymous"
        },
        {
            text: "You don't have to control your thoughts. You just have to stop letting them control you.",
            author: "Dan Millman"
        },
        {
            text: "Healing takes time, and asking for help is a courageous step.",
            author: "Mariska Hargitay"
        },
        {
            text: "What mental health needs is more sunlight, more candor, and more unashamed conversation.",
            author: "Glenn Close"
        }
    ];
    
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    alert(`📖 ${quote.text}\n\n— ${quote.author}`);
}

// Mood Tracker
function logMood(mood) {
    const moodEntry = {
        mood: mood,
        date: new Date().toISOString()
    };
    storage.append('moods', moodEntry);
    displayMoodHistory();
    alert('Mood logged! Thank you for checking in with yourself. 💙');
}

function displayMoodHistory() {
    const moods = storage.get('moods').slice(-7).reverse();
    const container = document.getElementById('mood-history');
    
    const moodEmojis = {
        great: '😄',
        good: '🙂',
        okay: '😐',
        bad: '😟',
        awful: '😢'
    };
    
    container.innerHTML = '<h4>Recent Moods:</h4>' + moods.map(entry => `
        <div style="padding: 5px 0;">
            ${moodEmojis[entry.mood]} ${entry.mood} - ${new Date(entry.date).toLocaleDateString()}
        </div>
    `).join('');
}

// Goals
function addGoal() {
    const input = document.getElementById('goal-input');
    const goalText = input.value.trim();
    
    if (goalText) {
        const goal = {
            text: goalText,
            completed: false,
            date: new Date().toISOString()
        };
        storage.append('goals', goal);
        input.value = '';
        displayGoals();
    }
}

function toggleGoal(index) {
    const goals = storage.get('goals');
    goals[index].completed = !goals[index].completed;
    storage.set('goals', goals);
    displayGoals();
}

function deleteGoal(index) {
    const goals = storage.get('goals');
    goals.splice(index, 1);
    storage.set('goals', goals);
    displayGoals();
}

function displayGoals() {
    const goals = storage.get('goals');
    const list = document.getElementById('goals-list');
    
    list.innerHTML = goals.map((goal, index) => `
        <li class="${goal.completed ? 'completed' : ''}">
            <span onclick="toggleGoal(${index})" style="cursor: pointer;">
                ${goal.completed ? '✅' : '⬜'} ${goal.text}
            </span>
            <button onclick="deleteGoal(${index})" style="padding: 5px 10px; background: #ff6b6b;">🗑️</button>
        </li>
    `).join('');
}

// Sleep Tracker
function logSleep() {
    const hours = document.getElementById('sleep-hours').value;
    if (hours) {
        const sleepEntry = {
            hours: parseFloat(hours),
            date: new Date().toISOString()
        };
        storage.append('sleep', sleepEntry);
        document.getElementById('sleep-hours').value = '';
        displaySleepHistory();
        alert('Sleep logged! 💤');
    }
}

function displaySleepHistory() {
    const sleepData = storage.get('sleep').slice(-7).reverse();
    const container = document.getElementById('sleep-history');
    
    container.innerHTML = '<h4>Recent Sleep:</h4>' + sleepData.map(entry => `
        <div style="padding: 5px 0;">
            ${entry.hours} hours - ${new Date(entry.date).toLocaleDateString()}
        </div>
    `).join('');
}

// Water Tracker
let waterCount = parseInt(localStorage.getItem('waterCount') || '0');
updateWaterDisplay();

function addWater() {
    waterCount++;
    localStorage.setItem('waterCount', waterCount);
    updateWaterDisplay();
}

function resetWater() {
    waterCount = 0;
    localStorage.setItem('waterCount', waterCount);
    updateWaterDisplay();
}

function updateWaterDisplay() {
    document.getElementById('water-count').textContent = waterCount;
}

// Progress Dashboard
function showProgress() {
    const moods = storage.get('moods');
    const goals = storage.get('goals');
    const sleep = storage.get('sleep');
    const gratitude = storage.get('gratitude');
    
    const completedGoals = goals.filter(g => g.completed).length;
    const avgSleep = sleep.length > 0 
        ? (sleep.reduce((sum, s) => sum + s.hours, 0) / sleep.length).toFixed(1) 
        : 0;
    
    const display = document.getElementById('progress-display');
    display.innerHTML = `
        <h4>Your Wellness Summary:</h4>
        <div style="padding: 10px; background: #f5f5f5; border-radius: 8px; margin-top: 10px;">
            <p>📝 Total moods logged: ${moods.length}</p>
            <p>✅ Goals completed: ${completedGoals} / ${goals.length}</p>
            <p>💤 Average sleep: ${avgSleep} hours</p>
            <p>🙏 Gratitude entries: ${gratitude.length}</p>
            <p>💧 Water today: ${waterCount} glasses</p>
        </div>
    `;
}

// Reminders
function setReminder() {
    alert('⏰ Reminder Settings\n\nSet daily reminders for:\n\n• Morning mood check\n• Hydration breaks\n• Evening gratitude journal\n• Bedtime wind-down\n\nNote: For a full implementation, enable browser notifications in your settings!');
}

// Self-Help Guides
function showGuide(type) {
    const guides = {
        anxiety: "Managing Anxiety:\n\n1. Practice deep breathing\n2. Use grounding techniques (5-4-3-2-1)\n3. Challenge anxious thoughts\n4. Exercise regularly\n5. Limit caffeine\n6. Get enough sleep\n7. Talk to someone you trust",
        stress: "Stress Reduction:\n\n1. Identify your stressors\n2. Practice time management\n3. Set healthy boundaries\n4. Exercise regularly\n5. Use relaxation techniques\n6. Connect with others\n7. Take breaks when needed",
        sleep: "Better Sleep Habits:\n\n1. Keep a consistent sleep schedule\n2. Create a bedtime routine\n3. Limit screen time before bed\n4. Keep bedroom cool and dark\n5. Avoid caffeine in evening\n6. Exercise during the day\n7. Practice relaxation before sleep",
        mindfulness: "Mindfulness 101:\n\n1. Start with 5 minutes daily\n2. Focus on your breath\n3. Notice without judgment\n4. Return attention when it wanders\n5. Be patient with yourself\n6. Practice regularly\n7. Expand to daily activities"
    };
    
    alert(guides[type]);
}

// Meditation
function playMeditation(type) {
    const meditations = {
        '5min': "5-Minute Quick Reset:\n\nFind a comfortable position...\nClose your eyes...\nTake 3 deep breaths...\nFocus on the present moment...\nLet go of tension with each exhale...",
        '10min': "10-Minute Deep Relaxation:\n\nSettle into a comfortable position...\nBegin to slow your breathing...\nScan your body for tension...\nRelease each area as you exhale...",
        'body': "Body Scan Meditation:\n\nStart at your toes...\nNotice sensations without judgment...\nSlowly move up through each body part...\nRelease tension as you go...",
        'sleep': "Sleep Meditation:\n\nLie comfortably in bed...\nTake slow, deep breaths...\nLet your body sink into the mattress...\nAllow sleep to come naturally..."
    };
    
    alert(`🎧 ${meditations[type]}\n\nTake your time with this meditation...`);
}

// Modal Controls
function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
    if (modalId === 'breathing-modal' && breathingInterval) {
        clearInterval(breathingInterval);
    }
}

// Initialize on load
window.addEventListener('DOMContentLoaded', () => {
    displayMoodHistory();
    displayGoals();
    displaySleepHistory();
});

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
        if (breathingInterval) {
            clearInterval(breathingInterval);
        }
    }
});
