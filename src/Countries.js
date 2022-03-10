import React from 'react'


const CountriesList = (props) => {

    const countries = props.countries
    return (
        <div>
            {
                countries.map( country => {
                    return (
                        <li>{ country.name }</li>   
                            );
                        })
            }
        </div>
    )
}

export default CountriesList