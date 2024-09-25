import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const customClassName = ({ isActive }) =>
    "menu__link" + (isActive ? " menu__link_active" : "");

  return (
    <nav className="menu">
      <NavLink to="/" className={customClassName}>
        Página Inicial
      </NavLink>
      <NavLink to="/reviews" className={customClassName}>
        Avaliações de emojis
      </NavLink>
      <NavLink to="/about-me" className={customClassName}>
        Sobre mim
      </NavLink>
      <NavLink to="/about-us" className={customClassName}>
        Sobre nós
      </NavLink>
    </nav>
  );
}

export default NavBar;
