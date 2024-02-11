import { Link } from "react-router-dom";
import Card from "../../components/card/Card";
import Title from "../../components/title/Title";
import css from "./DashboardPage.module.css";
import Preloader from "../../components/preloader/Preloader";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/authSlice";

function DashboardPage() {

  const { loading, house } = useSelector((state) => state.counter)

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className={css.wrapper}>
      <div className={css.kik}>
        <Title title="Мои объявления" />
      </div>
      <div className={css.btn}>
        <Link className={css.add} to="/create-house">
          Добавить
        </Link>
        <button className={css.logout} onClick={handleLogout}>logout</button>
      </div>
      <div className={css.cardWrapper}>
        {house &&
          house.map((item) => <Card key={item.id} {...item} isAdmin={true} />)}
      </div>
    </div>
  );
}

export default DashboardPage;
