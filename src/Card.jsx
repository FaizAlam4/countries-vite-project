/* eslint-disable react/prop-types */
import "./Card.css";

function Card(props) {
  return (
    <div className="card-container-item">
      <div className="card-container-item-1">
        <img src={props.country.flags.png} alt="" />
      </div>
      <div className="card-container-item-2">
        <h3 className="list-item-title">{props.country.name.common}</h3>

        <ul className="list-wrapper">
          <li className="list-item">
            {" "}
            <b>population: </b> {props.country.population}
          </li>
          <li className="list-item">
            <b>Region: </b>
            {props.country.region}
          </li>
          <li className="list-item">
            <b>Capital: </b>
            {props.country.capital}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
