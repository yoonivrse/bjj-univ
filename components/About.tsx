import Image from "next/image";
import styles from "./About.module.css";
import aboutData from "@/data/about.json";

export default function About() {
  const { title, subtitle, intro, staff } = aboutData;

  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <div className={styles.textCenter}>
          <h2 className={styles.sectionHeading}>{title}</h2>
          <h3 className={styles.sectionSubheading}>{subtitle}</h3>
        </div>

        <div className={styles.introRow}>
          <div className={styles.introParagraphs}>
            {intro.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className={styles.introLogo}>
            <Image
              src={`/about/${intro.logoImage}`}
              alt={intro.logoAlt}
              width={300}
              height={300}
              style={{ width: "90%", height: "auto" }}
            />
          </div>
        </div>

        <div className={styles.staff}>
          <div className={styles.staffTitle}>
            <h5>{staff.title}</h5>
          </div>
          <div className={styles.infoBox}>
            {staff.groups.map((group) => (
              <div key={group.role} className={styles.infoRow}>
                <span className={styles.groupName}>{group.role}</span>
                <span className={styles.member}>{group.members.join(" ")}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
