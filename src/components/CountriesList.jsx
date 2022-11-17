import { Link } from "react-router-dom"

function CountriesList({countries}) {
    return (
        countries.map(country => {
            return (
                <div key={country.alpha3Code}>
                  <Link to={country.alpha3Code}>{country.name.common}</Link>  
                </div>
            )
        })
    )
}

export default CountriesList