import "./style.css";

interface CardProps {
  imgSrc: string;
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ imgSrc, title, content }) => {
  return (
    <div className="card">
      <img src={imgSrc} className="card-img" />
      <div>{title}</div>
      <div>{content}</div>
    </div>
  );
};

export default Card;
