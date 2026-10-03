import type { ExperienceItem } from "../../types";
import styles from "./Experience.module.css";

export function Experience({ items }: { items: ExperienceItem[] }) {
  return (
    <section className={styles.section} id="experience" aria-labelledby="experience-title">
      <p className={styles.label} id="experience-title">Experience</p>
      <div className={styles.timeline}>
        {items.map((item, index) => (
          <article className={styles.role} key={`${item.company}-${item.title}`}>
            <span className={`${styles.marker} ${index === 0 ? styles.current : ""}`} aria-hidden="true" />
            <div className={styles.roleHeader}>
              <div>
                <h2>{item.title} <span aria-hidden="true">·</span> <em>{item.company}</em></h2>
                <p className={styles.meta}>{item.location} <span aria-hidden="true">·</span> {item.employment}</p>
              </div>
              <time>{item.period}</time>
            </div>
            <p className={styles.description}>{item.description}</p>
            <ul className={styles.highlights}>
              {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
            <div className={styles.stack} aria-label={`${item.company} technologies`}>
              {item.technologies.map((technology) => <span key={technology}>{technology}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}