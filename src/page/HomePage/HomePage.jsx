import React, { useEffect, useState } from "react";
import Title from "../../components/title/Title";
import css from "./HomePage.module.css";
import Card from "../../components/card/Card";
import Preloader from "../../components/preloader/Preloader";

function HomePage() {
  const [house, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    fetch("https://605b21f027f0050017c063b9.mockapi.io/api/v3/houses")
      .finally(() => setLoading(false))
      .then((res) => res.json())
      .then((data) => setHouses(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className={css.wrapper}>
      <Title title="Последние объявление " />
      <div className={css.cardWrapper}>
        {house && house.map((item) => <Card key={item.id} {...item} />)}
      </div>
    </div>
  );
}

export default HomePage;
