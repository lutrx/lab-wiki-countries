import { Link } from "react-router-dom"

function CountriesList({countries}) {
    return (
        countries.map(country => {
            return (
                <div key={country.alpha3Code} className="col-5">
                    <div className="list-group">
                        <Link to={country.alpha3Code} className="list-group-item list-group-item-action">{country.name.common} </Link>    
                    </div>
                </div>
            )
        })
    )
}

export default CountriesList