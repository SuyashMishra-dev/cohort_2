import React from 'react';
// import '../../App.css';
import styles from './Buttons.module.css'

export default function Buttons() {
  return (
    <div>
        <table>
            <tr>
                <button className={styles.blue}>
                    JOIN US
                </button>
                <button className={styles.grey}>
                    SETTINGS
                </button>
            </tr>
            <tr>
                <button className={styles.yellow}>
                    LOGIN
                </button>
                <button className={styles.red}>
                    CONTACT US
                </button>
            </tr>
            <tr>
                <button className={styles.green}>
                    SEARCH
                </button>
                <button className={styles.purple}>
                    HELP
                </button>
            </tr>
            <tr>
                <button className={styles.pink}>
                    HOME
                </button>
                <button className={styles.brown}>
                    DOWNLOAD
                </button>
            </tr>
        </table>
    </div>
  );
}
