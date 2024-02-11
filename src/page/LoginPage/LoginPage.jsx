import css from "./LoginPage.module.css";
import Title from "../../components/title/Title";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login as loginRedux } from "../../redux/authSlice";

function LoginPage() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    navigate("/dashBoard");
    if (login === "Admin" && password === "Admin") {
      dispatch(loginRedux());
      // navigate("/dashBoard");
    } else {
      alert("Неверный логин или пароль");
    }
  };

  return (
    <div className={css.wrapper}>
      <div className={css.title}>
        <h1>Войти</h1>
      </div>
      <form onSubmit={submit}>
        <div className={css.login}>
          <div>
            <label htmlFor="login">Login</label>
          </div>
          <input
            type="text"
            id="login"
            value={login}
            placeholder="password: Admin"
            onChange={(e) => setLogin(e.target.value)}
          />
          <div>
            <label htmlFor="password">Password</label>
          </div>
          <input
            type="password"
            id="password"
            value={password}
            placeholder="password: Admin"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className={css.btn}>
            <button type="submit">Войти</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
