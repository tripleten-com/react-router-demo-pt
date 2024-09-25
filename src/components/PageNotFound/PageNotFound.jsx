import { Link } from "react-router-dom";
import "./PageNotFound.css";

function PageNotFound() {
  return (
    <div className="not-found">
      <h3 className="not-found__title">
        <span>404</span> - Página não encontrada!
      </h3>
      <p className="not-found__text">
        Ops! Não há nada aqui... Desculpe. 🥺
      </p>
      <Link to="/">Voltar</Link>
    </div>
  );
}

export default PageNotFound;
