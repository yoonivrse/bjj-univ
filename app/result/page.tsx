"use client";

import { useState, useRef, useEffect } from "react";
import RankingTable from "@/components/RankingTable";
import resultData from "@/data/result.json";
import styles from "./result.module.css";

const years = (Object.keys(resultData) as (keyof typeof resultData)[]).sort(
  (a, b) => Number(b) - Number(a)
);

export default function ResultPage() {
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function selectYear(year: keyof typeof resultData) {
    setSelectedYear(year);
    setIsOpen(false);
  }

  const currentData = resultData[selectedYear];

  return (
    <main className={styles.main}>
      <a href="https://mybox.naver.com/share/list?shareKey=34oZJUfrk1aYgUvpcBrMdry_lFC-Y38qy29b2ZBoE4oB">
        <button className={styles.galleryBtn}>
          Gallery
        </button>
      </a>

      <div className={styles.dropdownWrapper} ref={dropdownRef}>
        <button
          className={styles.dropdownTrigger}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <span>{selectedYear}년</span>
          <span className={`${styles.arrow} ${isOpen ? styles.arrowUp : ""}`}>▼</span>
        </button>

        {isOpen && (
          <ul className={styles.dropdownList} role="listbox">
            {years.map((year) => (
              <li
                key={year}
                role="option"
                aria-selected={year === selectedYear}
                className={`${styles.dropdownItem} ${year === selectedYear ? styles.dropdownItemActive : ""}`}
                onClick={() => selectYear(year)}
              >
                {year}년
              </li>
            ))}
          </ul>
        )}
      </div>

      <RankingTable data={currentData} />

    </main>
  );
}