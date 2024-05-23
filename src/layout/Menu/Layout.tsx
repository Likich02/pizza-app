import { NavLink, Outlet, useNavigate } from "react-router-dom";
import styles from "./Layout.module.css";
import Button from "../../components/Button/Button";
import cn from "classnames";

export function Layout() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("jwt");
    navigate("/auth/login");
  };
  return (
    <div className={styles["layout"]}>
      <div className={styles["sidebar"]}>
        <div className={styles["user"]}>
          <img src="/avatar.png" alt="Аватар" className={styles["avatar"]} />
          <div className={styles["name"]}>Даниил Луковский</div>
          <div className={styles["email"]}>lukovskii02@mail.ru</div>
        </div>
        <div className={styles["menu"]}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn(styles["link"], {
                [styles.active]: isActive,
              })
            }
          >
            <img
              src="/menu-icon.svg"
              alt="Иконка меню"
              className={styles["icon"]}
            />
            Меню
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              cn(styles["link"], {
                [styles.active]: isActive,
              })
            }
          >
            <img
              src="/cart-icon.svg"
              alt="Иконка корзины"
              className={styles["icon"]}
            />
            Корзина
          </NavLink>
        </div>
        <Button className={styles["exit"]} onClick={logout}>
          Выйти
        </Button>
      </div>
      <div className={styles["content"]}>
        <Outlet />
      </div>
    </div>
  );
}
