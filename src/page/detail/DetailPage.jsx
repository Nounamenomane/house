import React, { useEffect, useState } from "react";
import css from "./DetailPage.module.css";
import Title from "../../components/title/Title";
import Image1 from "./image 1.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Preloader from "../../components/preloader/Preloader";
import Error from "../../components/error/Error";
import { useParams } from "react-router-dom";
import Api from "../../api/Api";

function DetailPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const params = useParams();

  useEffect(() => {
    Api.getHouseById(params.id)
      .finally(() => setLoading(false))
      .then((res) => setData(res.data))
      .catch((e) => setError(e));
  }, []);

  if (loading) {
    return <Preloader />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.image}>
          <Carousel showIndicators={false} showStatus={false} infiniteLoop>
            <img src={data?.image} alt="" />
            <div>
              <img src="https://res.akamaized.net/domain/image/upload/t_web/v1538713881/bigsmall_Mirvac_house2_twgogv.jpg" />
            </div>
            <div>
              <img src="https://cdn.apartmenttherapy.info/image/upload/v1556716350/stock/8ea241e96504a398f291a31939963e8ba948368c.jpg" />
            </div>
            <div>
              <img src="https://res.akamaized.net/domain/image/upload/t_web/v1538713881/bigsmall_Mirvac_house2_twgogv.jpg" />
            </div>
          </Carousel>
        </div>
        <div className={css.detail}>
          {data && (
            <>
              <Title title={data.title} />
              <Title title={"Price: " + data.price} />
              <p></p>
              <p>{data.desc}</p>
            </>
          )}
          <div className={css.btn}>
            <button>Позвонить</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
