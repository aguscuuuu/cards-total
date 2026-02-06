// Definir los dos mazos
const decks = {
    poker: {
        cards: [
            { name: 'hearts-A', value: 1 },
            { name: 'hearts-2', value: 2 },
            { name: 'hearts-3', value: 3 },
            { name: 'hearts-4', value: 4 },
            { name: 'hearts-5', value: 5 },
            { name: 'hearts-6', value: 6 },
            { name: 'hearts-7', value: 7 },
            { name: 'hearts-8', value: 8 },
            { name: 'hearts-9', value: 9 },
            { name: 'hearts-10', value: 10 },
            { name: 'hearts-J', value: 10 },
            { name: 'hearts-Q', value: 10 },
            { name: 'hearts-K', value: 10 },
            { name: 'diamonds-A', value: 1 },
            { name: 'diamonds-2', value: 2 },
            { name: 'diamonds-3', value: 3 },
            { name: 'diamonds-4', value: 4 },
            { name: 'diamonds-5', value: 5 },
            { name: 'diamonds-6', value: 6 },
            { name: 'diamonds-7', value: 7 },
            { name: 'diamonds-8', value: 8 },
            { name: 'diamonds-9', value: 9 },
            { name: 'diamonds-10', value: 10 },
            { name: 'diamonds-J', value: 10 },
            { name: 'diamonds-Q', value: 10 },
            { name: 'diamonds-K', value: 10 },
            { name: 'clubs-A', value: 1 },
            { name: 'clubs-2', value: 2 },
            { name: 'clubs-3', value: 3 },
            { name: 'clubs-4', value: 4 },
            { name: 'clubs-5', value: 5 },
            { name: 'clubs-6', value: 6 },
            { name: 'clubs-7', value: 7 },
            { name: 'clubs-8', value: 8 },
            { name: 'clubs-9', value: 9 },
            { name: 'clubs-10', value: 10 },
            { name: 'clubs-J', value: 10 },
            { name: 'clubs-Q', value: 10 },
            { name: 'clubs-K', value: 10 },
            { name: 'spades-A', value: 1 },
            { name: 'spades-2', value: 2 },
            { name: 'spades-3', value: 3 },
            { name: 'spades-4', value: 4 },
            { name: 'spades-5', value: 5 },
            { name: 'spades-6', value: 6 },
            { name: 'spades-7', value: 7 },
            { name: 'spades-8', value: 8 },
            { name: 'spades-9', value: 9 },
            { name: 'spades-10', value: 10 },
            { name: 'spades-J', value: 10 },
            { name: 'spades-Q', value: 10 },
            { name: 'spades-K', value: 10 }
        ]
    },
    spanish: {
        cards: [
            { name: 'gold-1', value: 1 },
            { name: 'gold-2', value: 2 },
            { name: 'gold-3', value: 3 },
            { name: 'gold-4', value: 4 },
            { name: 'gold-5', value: 5 },
            { name: 'gold-6', value: 6 },
            { name: 'gold-7', value: 7 },
            { name: 'gold-8', value: 8 },
            { name: 'gold-9', value: 9 },
            { name: 'cup-1', value: 1 },
            { name: 'cup-2', value: 2 },
            { name: 'cup-3', value: 3 },
            { name: 'cup-4', value: 4 },
            { name: 'cup-5', value: 5 },
            { name: 'cup-6', value: 6 },
            { name: 'cup-7', value: 7 },
            { name: 'cup-8', value: 8 },
            { name: 'cup-9', value: 9 },
            { name: 'sword-1', value: 1 },
            { name: 'sword-2', value: 2 },
            { name: 'sword-3', value: 3 },
            { name: 'sword-4', value: 4 },
            { name: 'sword-5', value: 5 },
            { name: 'sword-6', value: 6 },
            { name: 'sword-7', value: 7 },
            { name: 'sword-8', value: 8 },
            { name: 'sword-9', value: 9 },
            { name: 'clubs-1', value: 1 },
            { name: 'clubs-2', value: 2 },
            { name: 'clubs-3', value: 3 },
            { name: 'clubs-4', value: 4 },
            { name: 'clubs-5', value: 5 },
            { name: 'clubs-6', value: 6 },
            { name: 'clubs-7', value: 7 },
            { name: 'clubs-8', value: 8 },
            { name: 'clubs-9', value: 9 }
        ]
    }
};

let currentDeck = 'spanish';
let maxCards = 4;
let correctCount = 0;
let incorrectCount = 0;
let correctSum = 0;

// Generar cartas aleatorias
function generateRandomCards() {
    const numCards = Math.floor(Math.random() * maxCards) + 1; // 1 a maxCards
    correctSum = 0;
    
    const cardsContainer = document.getElementById('cardsContainer');
    cardsContainer.innerHTML = '';
    
    const deck = decks[currentDeck];
    
    for (let i = 0; i < numCards; i++) {
        const randomIndex = Math.floor(Math.random() * deck.cards.length);
        const card = deck.cards[randomIndex];
        
        correctSum += card.value;
        
        // Crear imagen de carta SVG
        const cardImg = document.createElement('img');
        cardImg.src = `./img/${currentDeck}-deck/${card.name}.svg`;
        cardImg.alt = `Carta ${card.name}`;
        cardImg.classList.add('card');
        
        cardsContainer.appendChild(cardImg);
    }
}

// Verificar respuesta
function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('userAnswer').value);
    const feedback = document.getElementById('feedback');
    
    if (isNaN(userAnswer)) {
        return;
    }
    
    if (userAnswer === correctSum) {
        feedback.textContent = '✓';
        feedback.className = 'feedback correct';
        correctCount++;
        document.getElementById('correctCounter').textContent = `✓ ${correctCount}`;
        
        // Generar nuevas cartas después de 1 segundo
        setTimeout(() => {
            generateRandomCards();
            document.getElementById('userAnswer').value = '';
            feedback.textContent = '';
            feedback.className = 'feedback';
        }, 1000);
    } else {
        feedback.textContent = '✗';
        feedback.className = 'feedback incorrect';
        incorrectCount++;
        document.getElementById('incorrectCounter').textContent = `✗ ${incorrectCount}`;
    }
}

// Cambiar de mazo
function switchDeck(deckType) {
    currentDeck = deckType;
    
    // Actualizar botones activos
    document.querySelectorAll('.deck-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(deckType + 'Deck').classList.add('active');
    
    // Generar nuevas cartas
    generateRandomCards();
    document.getElementById('userAnswer').value = '';
    document.getElementById('feedback').textContent = '';
    document.getElementById('feedback').className = 'feedback';
}

// Cambiar número máximo de cartas
function cycleMaxCards() {
    maxCards = (maxCards % 5) + 1; // Cicla entre 1 y 5
    document.getElementById('maxCardsBtn').textContent = `Max: ${maxCards}`;
    
    // Generar nuevas cartas
    generateRandomCards();
    document.getElementById('userAnswer').value = '';
    document.getElementById('feedback').textContent = '';
    document.getElementById('feedback').className = 'feedback';
}

// Event listeners
document.getElementById('submitBtn').addEventListener('click', checkAnswer);
document.getElementById('userAnswer').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkAnswer();
    }
});

document.getElementById('pokerDeck').addEventListener('click', () => switchDeck('poker'));
document.getElementById('spanishDeck').addEventListener('click', () => switchDeck('spanish'));
document.getElementById('maxCardsBtn').addEventListener('click', cycleMaxCards);

// Inicializar juego
generateRandomCards();