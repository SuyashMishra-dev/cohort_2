import React from 'react';
import styles from '../general.module.css'

const CollectionNav = (props) => {

    return (
        <React.Fragment>
            <div className={`row ${styles.bgcolor}`}>
                <div className={`col-xs-12 `}>
                    <h4 className="ml-4">
                        {props.category}
                    </h4>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CollectionNav;