import React from 'react';
import logo from './logo.svg';
import './App.css';
import styles from './styles.module.css'
export default function Button() {
  return (
    <div className="App">
      <h2>Hello</h2>
      <div>
        <button className={styles.btn}>Join US</button>
        <button className={styles.btnSet}>Setting</button>
      </div>
      <div className={styles.next}>
        <button className={styles.loginbtn}>LOGIN</button>
        <button className={styles.contactbtn}>CONTACT US</button>
      </div>
      <div className={styles.next}>
        <button className={styles.serachBtn}>SEARCH</button>
        <button className={styles.helpBtn}>HELP</button>
    </div>
    <div className={styles.next}>
        <button className={styles.homeBtn}>HOME</button>
        <button className={styles.downloadBtn}>DOWNLOAD</button>
    </div>
    
    </div>
   
  );
}
