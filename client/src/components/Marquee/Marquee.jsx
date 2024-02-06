import styles from "./marquee.module.css";

export default function Marquee() {
    const marqueeText = "AI \u00B7\u00A0\u00A0\u00A0\u00A0 Stack\u00B7\u00A0\u00A0\u00A0\u00A0\u00A0".repeat(6); // Repeat the text 10 times
    return (
        <div className={styles.container}>
            <h1 className={styles.text}>{marqueeText}</h1>
        </div>
    );
}
