import Headling from "../../components/Headlink/Headling";
import Search from "../../components/Search/Search";
import styles from "./Menu.module.css";

export function Menu() {
  return (
    <>
      <div className={styles["head"]}>
        <Headling>Меню</Headling>
        <Search placeholder="Введите блюдо или состав" />
      </div>
    </>
  );
}
