import { Link } from "react-router-dom";
import Card from "../../components/card/Card";
import Title from "../../components/title/Title";
import css from "./DashboardPage.module.css";
import { useEffect, useState } from "react";
import Preloader from "../../components/preloader/Preloader";

function DashboardPage(props) {
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
      <div className={css.kik}>
        <Title title="Мои объявления" />
        <Link className={css.add} to="/create-house">
          {" "}
          Добавить
        </Link>
      </div>
      <div className={css.cardWrapper}>
        {house &&
          house.map((item) => <Card key={item.id} {...item} isAdmin={true} />)}
      </div>
    </div>
  );
}

export default DashboardPage;
