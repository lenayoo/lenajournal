import "./style.css";

interface CardProps {
  imgSrc: string;
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ imgSrc, title, content }) => {
  return (
    <div className="card">
      <div className="card-wrapper">
        <img src={imgSrc} className="card-img" />
        <div className="card-title">{title}</div>
        <div className="card-content">{content}</div>
      </div>
    </div>
  );
};

export default Card;
