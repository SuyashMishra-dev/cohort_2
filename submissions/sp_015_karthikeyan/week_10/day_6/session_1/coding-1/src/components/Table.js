import React from 'react';

import { Link } from 'react-router-dom';

const Table = (props) => {
    console.log(props);
    return (
        <table className='table text-center'>
            <thead>
                <tr>
                    <th className='align-middle'>Name</th>
                    <th className='align-middle'>Country</th>
                    <th className='align-middle'>T20 Score</th>
                    <th className='align-middle'>ODI Score</th>
                    <th className='align-middle'>Test Score</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map(ele => {
                    return (
                        <tr key={ele.name}>
                            <td className='align-middle'><Link to={`/details/${ele.name}`}>{ele.name}</Link></td>
                            <td className='align-middle'>{ele.country}</td>
                            <td className='align-middle'>{ele.t20Score}</td>
                            <td className='align-middle'>{ele.odiScore}</td>
                            <td className='align-middle'>{ele.testScore}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Table;