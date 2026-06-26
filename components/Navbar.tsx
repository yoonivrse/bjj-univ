"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { label: "대회 안내", href: "/", route: true },
  { label: "대회 결과", href: "/result",    route: true  },
  { label: "About",    href: "/about",     route: true },
  { label: "Sponsor",  href: "#sponsor",   route: false },
  { label: "Contact",  href: "#contact",   route: false },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <nav id="mainNav" className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.org} onClick={closeMenu}>
          <span className={styles.orgName}>T.A.P</span>
          <span className={styles.drgDesc}>SOGANG x EWHA</span>
        </Link>

        <button
          className={styles.toggler}
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className={styles.togglerText}>Menu</span>
          <span className={`${styles.togglerIcon} ${isMenuOpen ? styles.togglerIconOpen : ""}`}>
            <span />
            <span />
            <span />
          </span>
        </button>

        <div className={`${styles.collapse} ${isMenuOpen ? styles.collapseOpen : ""}`}>
          <ul className={styles.navList}>
            {NAV_LINKS.map((link) => (
              <li key={link.href} className={styles.navItem}>
                {link.route ? (
                  <Link href={link.href} className={styles.navLink} onClick={closeMenu}>
                    {link.label}
                  </Link>
                ) : (
                  <a href={link.href} className={styles.navLink} onClick={closeMenu}>
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </nav>
  );
}