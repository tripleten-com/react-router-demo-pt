import { useParams, useNavigate } from "react-router-dom";

import "./Review.css";

function Review({ reviews }) {
  const navigate = useNavigate();
  const params = useParams();
  let id = params.reviewId;
  id = id - 1;

  return (
    <div className="review">
      {reviews && (
        <div className="review__item">
          <h3>{reviews[id]?.title}</h3>
          <p>{reviews[id]?.text}</p>
          <p className="review__rating">Avaliação final:{reviews[id]?.rating}/5</p>
          <button type="button" onClick={() => navigate("/reviews")}>
            Voltar para a lista de avaliações
          </button>
        </div>
      )}
    </div>
  );
}

export default Review;
