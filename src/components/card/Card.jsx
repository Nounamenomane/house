import { useState } from "react";
import css from "./Card.module.css";
import { useNavigate } from "react-router-dom";

function Card(props) {
  const [isloading, setLoading] = useState(true);

  const navigate = useNavigate();

  const handleDelete = () => {
    const res = window.confirm(
      "Вы дейтвительно хотите удалить объявление " + props.title + " ?"
    );
    if (!res) return res;
    fetch(
      `https://605b21f027f0050017c063b9.mockapi.io/api/v3/houses/${props.id}`,
      {
        method: "DELETE",
      }
    ).then(() => {
      window.location.reload();
    });
  };

  const handleDetail = () => {
    navigate("/detail/" + props.id);
  };
  return (
    <div className={css.wrapper}>
      <div>
        <img src={props.image} alt="" />
        <h1>{props.title}</h1>
        <p>{props.price}$</p>
        {props.isAdmin ? (
          <button onClick={handleDelete}>Удалить</button>
        ) : (
          <button onClick={handleDetail}>Подробнее</button>
        )}
      </div>
    </div>
  );
}

export default Card;
