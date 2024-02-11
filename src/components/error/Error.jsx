import { useNavigate } from "react-router-dom";
import css from "./Error.module.css";
function Error() {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  const handleReaload = () =>{
    window.location.reload()
  }
  return (
    <div className={css.wrapper}>
      <h1>Что-то пошло не так!</h1>
      <h2>Попробуйте позже или перезгрузите</h2>
      <div className={css.actions}>
        <button onClick={handleHome}>Home</button>
        <button onClick={handleReaload}>Reload</button>
      </div>
    </div>
  );
}

export default Error;
