import css from "./CreatePage.module.css";
import Title from "../../components/title/Title";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreatePage() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [isSending, setSending] = useState(false);
  
  const navigate = useNavigate();
  
  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    
    const data = {
      title: name,
      price: price,
      image: image,
      desc: desc,
    };
    
    try {
      const res = await fetch(
        "https://605b21f027f0050017c063b9.mockapi.io/api/v3/houses",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.status === 201) {
        alert("Вы создали объявление");
        navigate("/dashboard");
      } else {
        throw new Error();
      }
    } catch (error) {
      alert("Ошибка");
      setSending(false);
    }
  };

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
          <p>Close</p>
          <button disabled={isSending}>Save</button>
        </div>
      </form>
    </div>
  );
}

export default CreatePage;
