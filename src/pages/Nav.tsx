import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
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
    </nav>
  );
}

export default Nav;
