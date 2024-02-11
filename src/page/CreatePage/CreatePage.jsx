import css from "./CreatePage.module.css";
import Title from "../../components/title/Title";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCreateHouseStatus } from "../../redux/mainSlice";
import { createHouse } from "../../redux/AsyncThuncks";

function CreatePage() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [isSending, setSending] = useState(false);
  const { setCreateHouseStatus } = useSelector((state) => state.counter);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (setCreateHouseStatus === "succes") {
      navigate("/dashboard");
      dispatch(setCreateHouseStatus);
    } else if (setCreateHouseStatus === "error") {
      alert("Ошибка");
      setSending(false);
      dispatch(setCreateHouseStatus);
    }
  }, [setCreateHouseStatus]);

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);

    const data = {
      title: name,
      price: price,
      image: image,
      desc: desc,
    };

    dispatch(createHouse(data));
  };

  const handleCLose = () => {
    navigate('/dashboard')
  }

  return (
    <div className={css.wrapper}>
      <Title title="Создать объявления" />
      <form onSubmit={submit}>
        <p>Название</p>
        <input
          required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className={css.divide}>
          <p>Description</p>
          <h5>
            The description will be included on the item's detail page
            underneath its image.{" "}
          </h5>
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <p>Картинка</p>
        <input
          required
          type="url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <p>Цена </p>
        <h5>This link will be hidden from public.</h5>
        <input
          required
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <div className={css.connect}>
          <button onClick={handleCLose}>Close</button>
          <button disabled={isSending}>Save</button>
        </div>
      </form>
    </div>
  );
}

export default CreatePage;
