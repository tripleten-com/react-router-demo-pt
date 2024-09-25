import { Outlet, Link } from "react-router-dom";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-us">
      <p>Encontre mais informações sobre nosso site aqui.</p>
      <ul>
        <li>
          <Link to="mission">Nossa missão</Link>
        </li>
        <li>
          <Link to="history">História do site</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default AboutUs;
