import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import styles from "./Header.module.css";
import { useTheme } from "../../hooks/useTheme";

export function Header() {
  const { isLight, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState("home");

  const handleNavClick = (section: string) => {
    setIsMenuOpen(false);
    setIsActive(section);
  };

  return (
    <header className={styles.header}>
      <button
        className={`${styles.menuButton} ${isMenuOpen ? styles.menuOpen : ""}`}
        type="button"
        onClick={() => setIsMenuOpen((open) => !open)}
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
      >
        <Menu size={24} strokeWidth={1.7} />
      </button>
      {isMenuOpen && (
        <button
          className={styles.overlay}
          type="button"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close navigation"
        />
      )}
      <nav
        className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}
        aria-label="Primary navigation"
      >
        <button
          className={styles.closeButton}
          type="button"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close navigation"
        >
          <X size={25} strokeWidth={1.7} />
        </button>
        <a
          href="#home"
          className={isActive === "home" ? styles.active : ""}
          onClick={() => handleNavClick("home")}
        >
          Home
        </a>
        <a
          href="#experience"
          className={isActive === "experience" ? styles.active : ""}
          onClick={() => handleNavClick("experience")}
        >
          Experience
        </a>
        <a
          href="#articles"
          className={isActive === "articles" ? styles.active : ""}
          onClick={() => handleNavClick("articles")}
        >
          Writing
        </a>
      </nav>
      <div className={styles.actions}>
        <button
          className={styles.themeButton}
          type="button"
          onClick={toggleTheme}
          aria-label={isLight ? "Use dark theme" : "Use light theme"}
        >
          {isLight ? (
            <Moon size={19} strokeWidth={1.7} />
          ) : (
            <Sun size={19} strokeWidth={1.7} />
          )}
        </button>
      </div>
    </header>
  );
}
