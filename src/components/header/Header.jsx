import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import css from "./Header.module.css";
import { useSelector } from "react-redux";
import icon from './img/menu-bar (1).png'
import { useClickOutside } from "../hooks/useCLickOutside";

function Header() {
  const login = useSelector((state) => state.auth.isAuth);

  const menuRef = useRef(null)
  useClickOutside(menuRef, () => setOpen(false))

  const [isOpen, setOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  useEffect(() => {
    // При каждом изменении маршрута (переходе на другую страницу), закрываем бургер-меню
    closeMenu();
  }, [location]);

  return (
    <div className={css.wrapper}>
      <Link className={css.logo} to="/">
        LOGO
      </Link>
      <div ref={menuRef} className={`${css.menu} ${isOpen ? css.active : ''}`}>
        <nav className={css.navigation}>
          <Link className={css.login} to="/aboutUs">
            О нас
          </Link>
          <Link className={css.login} to="*">
            Контакты
          </Link>{" "}
          {login ? (
            <Link className={css.login} to="/dashboard">
              Кабинет
            </Link>
          ) : (
            <Link className={css.login} to="/login">
              Войти
            </Link>
          )}
        </nav>
      </div>
      <div onClick={toggleMenu} className={css.burger}>
        <img src={icon} alt="" />
      </div>
    </div>
  );
}

export default Header;
