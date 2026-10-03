import type { Article } from "../../types";
import { ArticleRow } from "./ArticleRow";
import styles from "./Articles.module.css";

export function Articles({ articles }: { articles: Article[] }) {
  const isEmpty = !articles?.length;

  return (
    <section className={styles.section} id="articles">
      <div className={styles.heading}>
        <p className={styles.label}>Latest articles</p>
        {!isEmpty && (
          <a href="#articles">
            View all articles <span>→</span>
          </a>
        )}
      </div>
      {isEmpty ? (
        <p className={styles.empty}>No articles yet. Check back soon.</p>
      ) : (
        <div>
          {articles.map((article) => (
            <ArticleRow key={article.title} article={article} />
          ))}
        </div>
      )}
    </section>
  );
}
