import indexData from "@/data/index.json";
import styles from "./page.module.css";
import CompetitionInfo from "@/components/CompetitionInfo";

type StatusKey = keyof typeof indexData.masthead.statusMessages;

export default function Home() {
  const { masthead } = indexData;
  const messages = masthead.statusMessages[masthead.status as StatusKey];

  const desktopBg = `url("/index/${masthead.images.desktop}")`;
  const mobileBg  = `url("/index/${masthead.images.mobile}")`;

  return (
    <main>
      <header
        className={styles.masthead}
        style={{
          "--bg-desktop": desktopBg,
          "--bg-mobile":  mobileBg,
        } as React.CSSProperties}
      >
        <div className={styles.container}>
          <div className={styles.mastheadSubheading}>
            {masthead.year} {masthead.edition}
          </div>
          <div className={styles.mastheadHeading}>
            {masthead.competitionName}
          </div>
          <div className={styles.mastheadCompletion}>
            {messages.map((msg, i) => (
              <p key={i}>{msg}</p>
            ))}
          </div>
        </div>
      </header>

      <CompetitionInfo />
    </main>
  );
}