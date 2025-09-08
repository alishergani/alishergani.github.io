import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div style={{ marginBottom: "22px" }}>
        <div style={{ display: "flex" }}>
          <p style={{ fontWeight: "700", fontSize: "20px" }}>Hi, I'm</p>
          <p className={styles.name}>ALISHER</p>
        </div>
        <p className={styles.name}>MELDEBEK</p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "14px 0",
        }}
      >
        <h3
          style={{ fontSize: "44px", lineHeight: "33px", textAlign: "center" }}
        >
          FRONTEND DEVELOPER
        </h3>
        <h4>SENIOR/MIDDLE/JUNIOR</h4>
      </div>
    </div>
  );
}
