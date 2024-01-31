import './SingleCard.css';

function SingleCard({ src, handleChoice }) {
  const handleClick = () => {
    handleChoice();
  };

  return (
    <div className="card">
      <img className="front" src={src} alt="card-front" />
      <img className="back" src="./assets/cover.png" alt="card-back" onClick={handleClick} />
    </div>
  );
}

export default SingleCard;
