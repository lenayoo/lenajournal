import { Link } from "react-router-dom";
import "./Style.css";

function Nav() {
  return (
    <div className="nav">
      <ul className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/journal">journal</Link>
        </li>
        <li>
          <Link to="/techblog">tech blog</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
