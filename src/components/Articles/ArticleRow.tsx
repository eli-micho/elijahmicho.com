import type { Article } from "../../types";
import styles from "./Articles.module.css";

export function ArticleRow({ article }: { article: Article }) {
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  })
    .format(new Date(`${article.date}T00:00:00`))
    .toUpperCase();

  return (
    <a className={styles.row} href={article.url}>
      <span>{formattedDate}</span>
      <div className={styles.content}>
        <strong>{article.title}</strong>
        <p>{article.description}</p>
      </div>
      <b>↗</b>
    </a>
  );
}
