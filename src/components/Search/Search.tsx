import { forwardRef } from "react";
import { SearchProps } from "./Search.props";
import styles from "./Search.module.css";
import cn from "classnames";

const Search = forwardRef<HTMLInputElement, SearchProps>(function Input(
  { isValid = true, className, ...props },
  ref
) {
  return (
    <div className={styles["input-wrapper"]}>
      <input
        ref={ref}
        className={cn(styles["input"], className, {
          [styles["invalid"]]: isValid,
        })}
        {...props}
      />
      <img src="/search-icon.svg" alt="Лупа" className={styles["icon"]} />
    </div>
  );
});

export default Search;
