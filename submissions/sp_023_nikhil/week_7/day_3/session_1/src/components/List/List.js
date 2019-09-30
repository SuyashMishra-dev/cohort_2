import React from 'react';

const List = (props) => {
    var ar = props.new.map(elm => (<li>{elm}</li>))
        return(
            <div>
                <ul>
                    {ar}
                </ul>
            </div>
        )
    }


export default List