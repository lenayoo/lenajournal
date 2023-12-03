import Nav from "./Nav";
import "./Style.css";
import Card from "../components/Card";

function Home() {
  return (
    <>
      <Nav />
      <Card
        imgSrc="reactbg.png"
        title="hello word, again"
        content="First journal"
      />
    </>
  );
}

export default Home;
