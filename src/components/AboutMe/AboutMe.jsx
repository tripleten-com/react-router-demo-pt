import "./AboutMe.css";
import { Outlet, Link } from "react-router-dom";

function AboutMe() {
  return (
    <div className="about">
      <ul className="links">
        <li>
          <Link to="my-story">Minha história</Link>
        </li>
        <li>
          <Link to="hobbies">Hobbies</Link>
        </li>
        <li>
          <Link to="contact">Informações de contato</Link>
        </li>
      </ul>
      <p>Eu sou uma pessoa simples. Eu vejo Emojis, eu escrevo avaliações.</p>
      <Outlet />
    </div>
  );
}

export default AboutMe;
