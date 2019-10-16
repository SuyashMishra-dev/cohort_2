// import React from 'react';

// import { Link } from 'react-router-dom';

// const Pagination = (data) => {
//   var data = localStorage.getItem("arr");
// console.log(data)
//     let limit = Math.floor(data.length/1);
//     return (
//         <nav>
//             <ul className='pagination justify-content-center'>
//                 {data.id === '0' ? (
//                     <li className='page-item disabled'>
//                         <Link to={`/ksjss54544/${Number(data.id) - 1}`} disabled className='page-link'>Previous</Link>
//                     </li>
//                 ) : (
//                     <li className='page-item'>
//                         <Link to={`/ksjss54544/${Number(data.id) - 1}`} className='page-link'>Previous</Link>
//                     </li>
//                 )}
//                 {Number(data.id) >= limit ? (
//                     <li className='page-item disabled'>
//                         <Link to={`/ksjss54544/${Number(data.id) + 1}`} className='page-link'>Next</Link>
//                     </li>
//                 ) : (
//                     <li className='page-item'>
//                         <Link to={`/ksjss54544/${Number(data.id) + 1}`} className='page-link'>Next</Link>
//                     </li>
//                 )}
                
//             </ul>
//         </nav>
//     )
// }

// export default Pagination;