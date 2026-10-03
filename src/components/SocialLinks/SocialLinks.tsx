import { AtSign } from "lucide-react";
import styles from "./SocialLinks.module.css";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/elijah-micho09",
    icon: <FaLinkedin />,
  },
  { label: "X", href: "https://twitter.com/username", icon: <FaXTwitter /> },
  {
    label: "Email",
    href: "mailto:olum.micho@gmail.com",
    icon: <HiOutlineMail />,
  },
];

export function SocialLinks() {
  return (
    <div className={styles.links}>
      {links?.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          aria-label={link.label}
        >
          {link.icon ? link.icon : <AtSign />}
        </a>
      ))}
    </div>
  );
}
