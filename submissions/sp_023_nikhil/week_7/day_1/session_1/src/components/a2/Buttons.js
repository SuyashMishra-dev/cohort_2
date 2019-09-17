import React from 'react';
import style from './button.module.css';

const Buttons = () => {
    return (
        <div>
            <div>
                <button className={style.edge+" btn-success"}>JOIN US</button>
                <button className={style.edge+" btn-warning"}>LOGIN</button>
            </div>
            <div>
                <button className={style.edge+" btn-dark"}>SEARCH</button>
                <button className={style.edge+" btn-primary"}>HOME</button>
            </div>
            <div>
                <button className={style.edge+" btn-danger"}>SETTINGS</button>
                <button className={style.edge+" btn-success"}>CONTACT US</button>
            </div>
            <div>
                <button className={style.edge+" btn-warning"}>HELP</button>
                <button className={style.edge+" btn-primary"}>DOWNLOAD</button>
            </div>
        </div>
    )
}
export default Buttons