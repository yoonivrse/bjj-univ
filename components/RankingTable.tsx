import styles from "./RankingTable.module.css";

type Ranking = {
  rank: number;
  name: string;
  university: string;
  gym: string;
};

type WeightClass = {
  class: string;
  rankings: Ranking[];
};

type BeltGroup = {
  belt: string;
  weightClasses: WeightClass[];
};

type GenderGroup = {
  gender: string;
  belts: BeltGroup[];
};

type Props = {
  data: GenderGroup[];
};

export default function RankingTable({ data }: Props) {
  return (
    <div className={styles.rankingContent}>
      {data.map((genderGroup) => (
        <div key={genderGroup.gender}>

          <div className={styles.gender}>
            <span>{genderGroup.gender}</span>
          </div>

          {genderGroup.belts.map((beltGroup) => (
            <div key={beltGroup.belt} className={`${styles.rankingContainer} ${styles[`${beltGroup.belt}Belt`]}`}>
              {beltGroup.weightClasses.map((wc) => (
                <div key={wc.class} className={styles.belt}>
                  <div className={styles.tableBox}>
                    <table className={`${styles.table} ${styles.tableMin} ${styles[`${beltGroup.belt}Belt`]}`}>
                      <thead>
                        <tr>
                          <th colSpan={4}>{wc.class}kg</th>
                        </tr>
                        <tr>
                          <th>순위</th>
                          <th className={styles.name}>이름</th>
                          <th className={styles.school}>대학</th>
                          <th className={styles.gym}>도장</th>
                        </tr>
                      </thead>
                      <tbody>
                        {wc.rankings.map((r) => (
                          <tr key={`${r.rank}-${r.name}`}>
                            <td>{r.rank}</td>
                            <td>{r.name}</td>
                            <td>{r.university}</td>
                            <td>{r.gym}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}

            </div>
          ))}
        </div>
      ))}
    </div>
  );
}