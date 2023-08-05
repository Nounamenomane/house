import React from "react";
import { Link, Routes } from "react-router-dom";
import css from "./Header.module.css";

function Header() {
  return (
    <div className={css.wrapper}>
      <Link className={css.logo} to="/">
        LOGO
      </Link>
      <nav>
        <Link className={css.login} to="/aboutUs">
          О нас
        </Link>
        <Link className={css.login} to="*">
          Контакты
        </Link>{" "}
        <Link className={css.login} to="/login">
          Войти
        </Link>
      </nav>
    </div>
  );
}

export default Header;
