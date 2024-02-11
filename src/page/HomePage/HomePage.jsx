import Title from "../../components/title/Title";
import css from "./HomePage.module.css";
import Card from "../../components/card/Card";
import Preloader from "../../components/preloader/Preloader";
import { useSelector } from "react-redux";

function HomePage() {
  const { loading, house } = useSelector((state) => state.counter);
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
