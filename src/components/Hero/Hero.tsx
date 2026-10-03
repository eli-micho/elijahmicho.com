import { Mail, MapPin } from "lucide-react";
import { SocialLinks } from "../SocialLinks/SocialLinks";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.content}>
        <div className={styles.identity}>
          <img
            src="/images/headshot_black_white.png"
            alt="Elijah Micho"
            className={styles.profileImage}
          />

          <div className={styles.identityText}>
            <h1>Elijah Micho</h1>
            <p>Software Engineer</p>
          </div>
        </div>

        <div className={styles.contact}>
          <div>
            <span className={styles.contactLabel}>Location</span>
            <div>
              <MapPin /> Calgary, Canada
            </div>
          </div>

          <div>
            <span className={styles.contactLabel}>Email</span>
            <div>
              <Mail />
              <a href="mailto:olum.micho@gmail.com">olum.micho@gmail.com</a>
            </div>
          </div>
        </div>

        <p className={styles.bio}>
          I'm an engineer based in Calgary building thoughtful AI products.
        </p>

        <SocialLinks />
      </div>
    </section>
  );
}
