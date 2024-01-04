/* eslint-disable react/prop-types */
import { useContext } from "react";
import "./Card.css";
import DarkContext from "../Context/DarkContext";
import { Link } from "react-router-dom";

function Card(props) {
  const { theme } = useContext(DarkContext);

  return (
    <Link to={`/${props.country.cca3}`}>
      <div className="card-container-item">
        <div className="card-container-item-1">
          <img src={props.country.flags.png} alt="" />
        </div>
        <div className={`card-container-item-2 ${theme}-card`}>
          <h3 className="list-item-title">{props.country.name.common}</h3>

          <ul className="list-wrapper">
            <li className="list-item">
              {" "}
              <b className={`${theme}-card`}>Population: </b>{" "}
              {props.country.population}
            </li>
            <li className="list-item">
              <b className={`${theme}-card`}>Region: </b>
              {props.country.region}
            </li>
            <li className="list-item">
              <b className={`${theme}-card`}>Capital: </b>
              {props.country.capital}
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
}

export default Card;
