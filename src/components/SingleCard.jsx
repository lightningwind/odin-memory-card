import './SingleCard.css';

function SingleCard({ src }) {
  return (
    <div className="card">
      <img className="front" src={src} alt="card-front" />
      <img className="back" src="./assets/cover.png" alt="card-back" />
    </div>
  );
}

export default SingleCard;
