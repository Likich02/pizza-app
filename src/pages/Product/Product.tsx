import { Await, useLoaderData } from "react-router-dom";
import { Product } from "../../interfaces/product.interface";
import { Suspense } from "react";
import Headling from "../../components/Headlink/Headling";
import styles from "./Product.module.css";

export function Product() {
  const data = useLoaderData() as { data: Product };

  return (
    <>
      <Suspense fallback={"Загрузка..."}>
        <Await resolve={data.data}>
          {({ data }: { data: Product }) => (
            <div className={styles["main"]}>
              <div>
                <Headling className={styles["headling"]}>{data.name}</Headling>
              </div>
              <div>
                <img src={data.image} alt="" className={styles["img"]} />
              </div>
              <div>
                <div className={styles["text"]}>Цена</div>
                <div className={styles["price"]}>
                  {data.price}&nbsp;
                  <span>₽</span>
                </div>
                <hr className={styles["hr"]} />
                <div className={styles["text"]}>Рейтинг</div>
                <div className={styles["price"]}>
                  {data.rating}
                  &nbsp;
                  <img src="/star-icon.svg" alt="Иконка звезды" />
                </div>
                <hr className={styles["hr"]} />
                <div className={styles["text"]}>Состав:</div>
                <div className={styles["price"]}>
                  {data.ingredients.join(", ")}
                </div>
              </div>
            </div>
          )}
        </Await>
      </Suspense>
    </>
  );
}
