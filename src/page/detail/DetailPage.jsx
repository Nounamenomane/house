import React, { useState } from "react";
import css from "./DetailPage.module.css";
import Image1 from "./image 1.svg";

const images = [
  "https://images.coolhouseplans.com/plans/44207/44207-b600.jpg",
  "https://cdn.apartmenttherapy.info/image/upload/v1556716350/stock/8ea241e96504a398f291a31939963e8ba948368c.jpg",
  "https://res.akamaized.net/domain/image/upload/t_web/v1538713881/bigsmall_Mirvac_house2_twgogv.jpg",
  "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/wp-content/uploads/2021/08/download-7.jpg",
];

function DetailPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.imageControls}>
          <img src={images[currentImageIndex]} alt="" />
          <div className={css.gap}>
            <button onClick={prevImage}>Previous</button>
            <button onClick={nextImage}>Next</button>
          </div>
        </div>
        <div className={css.detail}>
          <h1>Продаю дом 5км в Нарыне</h1>
          <h2>Цена: 55000 $</h2>
          <p>
            Президентская кампания Бориса Ельцина на выборах 1996 года началась
            де-юре 15 февраля 1996 года, когда действовавший президент
            Российской Федерации объявил о своём решении баллотироваться на
            второй президентский срок. Несмотря на свой возраст (ему было 65 лет
            на момент избрания), серьёзные проблемы со здоровьем и низкий
            предвыборный рейтинг, Ельцин решил принять участие в Президентская
            кампания Бориса Ельцина на выборах 1996 года началась де-юре 15
            февраля 1996 года, когда действовавший президент Российской
            Федерации объявил о своём решении баллотироваться{" "}
          </p>
        </div>
      </div>
      <div className={css.btn}>
        <button>Позвонить</button>
      </div>
    </div>
  );
}

export default DetailPage;
