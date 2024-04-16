import { Link, Outlet, useLocation } from "react-router-dom";
import styles from "./Layout.module.css";
import Button from "../../components/Button/Button";
import { useEffect } from "react";
import cn from "classnames";

export function Layout() {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);
  return (
    <div className={styles["layout"]}>
      <div className={styles["sidebar"]}>
        <div className={styles["user"]}>
          <img src="/avatar.png" alt="Аватар" className={styles["avatar"]} />
          <div className={styles["name"]}>Даниил Луковский</div>
          <div className={styles["email"]}>lukovskii02@mail.ru</div>
        </div>
        <div className={styles["menu"]}>
          <Link
            to="/"
            className={cn(styles["link"], {
              [styles.active]: location.pathname === "/",
            })}
          >
            <img
              src="/menu-icon.svg"
              alt="Иконка меню"
              className={styles["icon"]}
            />
            Меню
          </Link>
          <Link to="/cart" className={styles["link"]}>
            <img
              src="/cart-icon.svg"
              alt="Иконка корзины"
              className={styles["icon"]}
            />
            Корзина
          </Link>
        </div>
        <Button className={styles["exit"]}>Выйти</Button>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
