import css from "./Card.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteHouse } from "../../redux/AsyncThuncks";

function Card(props) {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = () => {
    const res = window.confirm(
      "Вы дейтвительно хотите удалить объявление " + props.title + " ?"
    );
    if (!res) return res;

    dispatch(deleteHouse(props.id));
  };

  const handleDetail = () => {
    navigate("/detail/" + props.id);
  };
  return (
    <div className={css.wrapper}>
      <img src={props.image} alt="" />
      <div className={css.card__info}>
        <h1>{props.title}</h1>
        <p>{props.price}$</p>
        <div className={css.btn}>
          {props.isAdmin ? (
            <button onClick={handleDelete}>Удалить</button>
          ) : (
            <button onClick={handleDetail}>Подробнее</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
