import Headling from "../../components/Headlink/Headling";
import ProductCart from "../../components/ProductCard/ProductCard";
import Search from "../../components/Search/Search";
import styles from "./Menu.module.css";

export function Menu() {
  return (
    <>
      <div className={styles["head"]}>
        <Headling>Меню</Headling>
        <Search placeholder="Введите блюдо или состав" />
      </div>
      <div>
        <ProductCart
          id={1}
          title="Наслаждение"
          description="Салями, руккола, помидоры, оливки"
          rating={4.5}
          price={300}
          image="/product-demo.png"
        />
      </div>
    </>
  );
}
