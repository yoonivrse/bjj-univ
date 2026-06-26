"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "./SponsorModal.module.css";

type Sponsor = {
  name: string;
  displayName: string;
  description: string;
  website: string;
  logoImage: string;
  detailImages: string[];
};

type Props = {
  sponsor: Sponsor;
  onClose: () => void;
};

export default function SponsorModal({ sponsor, onClose }: Props) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="닫기">
          ✕
        </button>
        <h2 className={styles.title}>{sponsor.displayName}</h2>
        {sponsor.description && (
          <p className={styles.description}>{sponsor.description}</p>
        )}
        <div className={styles.logoWrapper}>
          <Image
            src={`/sponsor/${sponsor.name}/${sponsor.logoImage}`}
            alt={sponsor.displayName}
            width={300}
            height={169}
            style={{ width: "100%", maxWidth: "300px", height: "auto", margin: "0 auto", display: "block" }}
          />
        </div>
        {sponsor.website && (
          <p className={styles.website}>
            <strong>공식 홈페이지: </strong>
            <a href={sponsor.website} target="_blank" rel="noopener noreferrer">
              {sponsor.website.replace(/^https?:\/\//, "")}
            </a>
          </p>
        )}
        {sponsor.detailImages.length > 0 && (
          <div className={styles.detailImages}>
            {sponsor.detailImages.map((img, i) => (
              <Image
                key={i}
                src={`/sponsor/${sponsor.name}/${img}`}
                alt={`${sponsor.displayName} 상세 이미지 ${i + 1}`}
                width={600}
                height={400}
                style={{ width: "100%", height: "auto" }}
              />
            ))}
          </div>
        )}
        <button className={styles.closeBottomBtn} onClick={onClose}>
          Close
        </button>

      </div>
    </div>
  );
}
