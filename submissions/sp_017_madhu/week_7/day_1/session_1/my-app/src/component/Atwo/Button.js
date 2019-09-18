import React from 'react';
import '../../App.css';
import styles from'./simpleList.module.css'

export default function Button() {
  return (
    <div >
        <table>
         <tr>
            <td><button className={styles.blue}>Join US</button></td>
            <td> <button className={styles.gray}>Settings</button></td>
        </tr>
        <tr>
            <td> <button className={styles.yellow}>Login</button></td>
            <td><button className={styles.red}>Contact US</button></td>
        </tr>
        <tr>
              <td> <button className={styles.green}>Search</button></td>
            <td>   <button className={styles.purple}>Help</button></td> 
        </tr>
        <tr>
             <td>   <button className={styles.pink}>Home</button></td>
            <td>  <button className={styles.brown}>Dowmload</button></td>
        </tr>
        </table>
        
    </div>
  );
}

