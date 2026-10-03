import type { Technology } from "../../types";
import styles from "./Technologies.module.css";

export function Technologies({ items }: { items: Technology[] }) {
  return (
    <section className={styles.section} aria-labelledby="technologies-title">
      <p className={styles.label} id="technologies-title">
        Technologies
      </p>
      <div className={styles.list}>
        {items?.map((item, index) => (
          <span className={styles.technology} key={item.name}>
            {item.name}
            {index < items.length - 1 && <b aria-hidden="true">•</b>}
          </span>
        ))}
      </div>
    </section>
  );
}
