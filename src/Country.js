import React from 'react';

const Country = (props) => {
    const country = props.country;
    return (
       
        <div>
            <h1>{country.name} details</h1>
            <ul>
                <li>Capital City: {country.details[0].capitalCity}</li>
                <li>Continent: {country.details[0].continent}</li>
            </ul>
            <div>
                <button>Countries</button>
            </div>
        </div>
    )
}
export default Country