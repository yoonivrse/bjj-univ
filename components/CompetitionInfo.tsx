import Image from "next/image";
import styles from "./CompetitionInfo.module.css";
import competitionData from "@/data/competition.json";
import KakaoMap from "./KakaoMap";

function parseBold(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  );
}

export default function CompetitionInfo() {
  const { title, subtitle, notice, posters, guide } = competitionData;

  return (
    <section className={styles.section} id="main-info">
      <div className={styles.container}>
        <div className={styles.textCenter}>
          <h2 className={styles.sectionHeading}>{title}</h2>
          <h3 className={styles.sectionSubheading}>{subtitle}</h3>
        </div>

        <div className={styles.content}>
          <div className={styles.notice}>
            <h3 className={styles.noticeTitle}>{notice.title}</h3>

            {notice.bracketLink && (
              <strong className={styles.matchTable}>
                ▶ 대진표 확인하기 :&nbsp;
                <a href={notice.bracketLink} target="_blank" rel="noopener noreferrer">
                  대진표 보기
                </a>
                &nbsp;◀
              </strong>
            )}

            <div className={styles.noticeItemDiv}>
            {notice.items.map((item, i) => (
              <b key={i} className={styles.noticeItem}>▪ {item}</b>
            ))}
            </div>

            <p>
              *전대주 인스타그램(
              <a href={notice.instagramUrl} target="_blank" rel="noopener noreferrer">
                {notice.instagramHandle}
              </a>
              )을 팔로우하시면 대회 현황 및 자세한 안내사항을 빠르게 확인하실 수 있습니다.
            </p>
          </div>

          {posters.map((poster, i) => (
            <Image
              key={i}
              src={`/poster/${poster.src}`}
              alt={poster.alt}
              width={800}
              height={1200}
              className={poster.device === "desktop" ? styles.poster : styles.posterMobile}
            />
          ))}

          <div className={styles.guide}>
            {guide.registerUrl && (
              <div className={styles.guideRegisterDiv}>
                <a href={guide.registerUrl} className={styles.guideRegister}>
                  <button>참가신청</button>
                </a>
                {guide.priorNotice && (
                  <div className={styles.guidePrior}>
                    {guide.priorNotice}
                  </div>
                )}
              </div>
            )}

            {guide.sections.map((sec, i) => (
              <div key={i} className={styles.guideSection}>
                <h5 className={styles.guideTitle}>{sec.title}</h5>

                {sec.items.map((item, j) => (
                  <p key={j} className={styles.guideItem}>
                    ▪ {parseBold(item)}
                  </p>
                ))}

                {"notes" in sec && sec.notes && sec.notes.length > 0 && (
                  <div className={styles.guideNotes}>
                    {sec.notes.map((note, k) => (
                      <b key={k} className={styles.guideNote}>* {note}</b>
                    ))}
                  </div>
                )}

                
                {"map" in sec && sec.map && (
                  <KakaoMap placeName={sec.map.placeName} />
                )}
              </div>
            ))}

            <div className={styles.guideSection}>
              <h5 className={styles.guideTitle}>{guide.contact.title}</h5>
              <span className={styles.contactItem}>
                ■ 연락처 : {guide.contact.phone} (성함과 함께 문자 남겨 주세요)
              </span>
              <span className={styles.contactItem}>
                ■ 인스타그램 :&nbsp;
                <a href={guide.contact.instagramUrl} target="_blank" rel="noopener noreferrer">
                  {guide.contact.instagramHandle}
                </a>
              </span>
              <span className={styles.contactItem}>
                ■ 카카오톡 오픈채팅 :&nbsp;
                <a href={guide.contact.kakaoUrl} target="_blank" rel="noopener noreferrer">
                  {guide.contact.kakaoUrl}
                </a>
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}