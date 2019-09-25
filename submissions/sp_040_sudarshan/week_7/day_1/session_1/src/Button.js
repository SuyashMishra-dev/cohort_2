import React from 'react';
import styles from './styles.module.css'


function button() {
  return (
    <div>
    <div>
      <button className={styles.join}>JOIN US </button>
      <button className={styles.setting}>SETTINGS </button>
    </div>

    <div>
    <button className={styles.login}>LOGIN </button>
    <button className={styles.contact}>CONTACT US </button>
    </div>

    <div>
    <button className={styles.search}>SEARCH </button>
    <button className={styles.help}>HELP </button>
    </div>

    <div>
    <button className={styles.home}>HOME </button>
    <button className={styles.download}>DOWNLOAD </button>
    </div>

</div>
  )
}

export default button;
