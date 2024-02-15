import { useState, useEffect } from 'react';  
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import SingleCard from './components/SingleCard';

const cardImages = [
  { "src": "./assets/helmet-1.png", matched: false },
  { "src": "./assets/potion-1.png", matched: false },
  { "src": "./assets/ring-1.png", matched: false },
  { "src": "./assets/scroll-1.png", matched: false },
  { "src": "./assets/shield-1.png", matched: false },
  { "src": "./assets/sword-1.png", matched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0); 
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    // Duplicates the set of cards, randomly sorts them, and tags on an id
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ( { ...card, id: uuidv4() } ));
    setCards(shuffledCards);  
    setTurns(0);
    setChoiceOne(null);
    setChoiceTwo(null);
  }

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards( (prevCards) => {
          return prevCards.map( (card) => {
            // Tag on a matched property if this is the selected card
            return (card.src === choiceOne.src) ? {...card, matched: true} 
              : card;
          } )
        })
      }
      // Set a delay before flipping the cards over
      setTimeout(() => resetTurn(), 1000);
    }
  }, [choiceOne, choiceTwo])

  // Starts a new game on load with a new hook
  useEffect(() => {
    shuffleCards();
  }, [])

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  }

  return (
    <div className='App'>
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard
            key={card.id} 
            src={card.src} 
            handleChoice={() => handleChoice(card)} 
            flipped={ card === choiceOne || card === choiceTwo || card.matched }
            disabled={disabled}
          />
        ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  )
}

export default App
