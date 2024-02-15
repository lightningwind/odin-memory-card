import './SingleCard.css';

function SingleCard({ src, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice();
    }
  };

  return (
    <div className="card">
      <div className={ flipped ? "flip" : "" }>
        <img className="front" src={src} alt="card-front" />
        <img className="back" src="./assets/cover.png" alt="card-back" onClick={handleClick} />
      </div>
    </div>
  );
}

export default SingleCard;
