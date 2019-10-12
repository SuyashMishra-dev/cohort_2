import React from 'react';

import { Link } from 'react-router-dom';

const Pagination = (props) => {
    let limit = Math.floor(props.length/5);
    console.log(Number(props.id), limit);
    return (
        <nav>
            <ul className='pagination justify-content-center'>
                {props.id === '0' ? (
                    <li className='page-item disabled'>
                        <Link to={`/showplayers/${Number(props.id) - 1}`} disabled className='page-link'>Previous</Link>
                    </li>
                ) : (
                    <li className='page-item'>
                        <Link to={`/showplayers/${Number(props.id) - 1}`} className='page-link'>Previous</Link>
                    </li>
                )}
                {Number(props.id) >= limit ? (
                    <li className='page-item disabled'>
                        <Link to={`/showplayers/${Number(props.id) + 1}`} className='page-link'>Next</Link>
                    </li>
                ) : (
                    <li className='page-item'>
                        <Link to={`/showplayers/${Number(props.id) + 1}`} className='page-link'>Next</Link>
                    </li>
                )}
                
            </ul>
        </nav>
    )
}

export default Pagination;