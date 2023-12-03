import Nav from "./Nav";
import "./Style.css";
import Card from "../components/Card";

function Home() {
  return (
    <div>
      <Nav />
      <Card
        imgSrc="reactbg.png"
        title="hello word, again"
        content="First journal"
      />
      <Card
        imgSrc="reactbg.png"
        title="hello word, again"
        content="First journal"
      />
    </div>
  );
}

export default Home;
