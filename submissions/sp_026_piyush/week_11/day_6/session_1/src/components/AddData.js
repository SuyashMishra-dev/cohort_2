import React from 'react';

const AddData = (props) => {
    return(
        <div>
            <h3>Capital</h3>
            <input type="text" />
            <h3>Continent</h3>
            <select>
                <option></option>
            </select>
            <h3>GDP</h3>
            <input type ="number" />
            <h3>Population</h3>
            <input type="number" />
            <button className="btn btn-info">Update</button>

        </div>
    );
}

export default AddData;