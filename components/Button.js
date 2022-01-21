import styles from "./Button.module.css";

export function Button({ children }) {
    return (
        <>
            <button type="button" className={styles.error}>
                TESTですよ〜!!!
            </button>
            <p>{children}あほ！</p>
        </>
    );
}
