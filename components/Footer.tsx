"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./Footer.module.css";
import SponsorModal from "./SponsorModal";
import sponsorData from "@/data/sponsor.json";

type Sponsor = (typeof sponsorData.sponsor)[number];

export default function Footer() {
  const { sponsor, individual, contact, footer } = sponsorData;
  const [activeModal, setActiveModal] = useState<Sponsor | null>(null);

  const hasSponsor = sponsor.length > 0;
  const hasIndividual = Object.keys(individual).length > 0;
  const showSponsorSection = hasSponsor || hasIndividual;

  return (
    <>
      {showSponsorSection && (
        <section className={styles.sponsorSection} id="sponsor">
          <div className={styles.container}>

            <div className={styles.textCenter}>
              <h2 className={styles.sectionHeading}>Sponsor</h2>
              <h3 className={styles.sectionSubheading}>Our Sponsors</h3>
            </div>

            {hasSponsor && (
              <div className={styles.sponsorGrid}>
                {sponsor.map((s) => (
                  <div key={s.name} className={styles.sponsorItem}>
                    <button
                      className={styles.sponsorLink}
                      onClick={() => setActiveModal(s)}
                      aria-label={`${s.displayName} 상세보기`}
                    >
                      <div className={styles.sponsorHover}>
                        <span className={styles.sponsorHoverIcon}>+</span>
                      </div>
                      <Image
                        src={`/sponsor/${s.name}/${s.logoImage}`}
                        alt={s.displayName}
                        width={400}
                        height={225}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </button>
                    <div className={styles.sponsorCaption}>
                      <div className={styles.sponsorCaptionHeading}>{s.displayName}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {hasIndividual && (
              <div className={hasSponsor ? styles.individualSectionWithBorder : styles.individualSection}>
                <h3 className={styles.individualTitle}>개인 후원</h3>
                <div className={styles.individualGrid}>
                  {Object.entries(individual).map(([university, members]) => (
                    <div key={university} className={styles.individualGroup}>
                      <span className={styles.individualUniversity}>{university}</span>
                      <span className={styles.individualMembers}>{members.join(", ")}</span>
                      <span className={styles.individualMembers}>선배님</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </section>
      )}
      {activeModal && (
        <SponsorModal
          sponsor={activeModal}
          onClose={() => setActiveModal(null)}
        />
      )}

      <section className={styles.contactSection} id="contact">
        <div className={styles.container}>
          <div className={styles.textCenter}>
            <h2 className={styles.sectionHeading}>Contact</h2>
            <h3 className={styles.sectionSubheading}>{contact.subtitle}</h3>
            <p className={styles.contactEmail}>
              T.A.P 이메일 주소 : {contact.email}
            </p>
            <div className={styles.socialBox}>
              {contact.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <Image
                    src={`/logo/${social.icon}`}
                    alt={social.label}
                    width={32}
                    height={32}
                  />
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerInner}>
            <span>{footer.copyright}</span>
            <Image
              src={`/about/${footer.logoImage}`}
              alt={footer.logoAlt}
              width={80}
              height={48}
              style={{ height: "3rem", width: "auto" }}
            />
          </div>
        </div>
      </footer>
    </>
  );
}