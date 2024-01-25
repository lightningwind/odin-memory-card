import { useState } from 'react';  
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import SingleCard from './components/SingleCard';

const cardImages = [
  { "src": "./assets/helmet-1.png" },
  { "src": "./assets/potion-1.png" },
  { "src": "./assets/ring-1.png" },
  { "src": "./assets/scroll-1.png" },
  { "src": "./assets/shield-1.png" },
  { "src": "./assets/sword-1.png" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0); 

  const shuffleCards = () => {
    // Duplicates the set of cards, randomly sorts them, and tags on an id
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ( { ...card, id: uuidv4() } ));
    setCards(shuffledCards);  
    setTurns(0);
  }

  return (
    <div className='App'>
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard key={card.id} src={card.src} />
        ))}
      </div>
    </div>
  )
}

export default App
