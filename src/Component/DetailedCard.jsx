/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link } from "react-router-dom";
import DarkContext from "../Context/DarkContext";
import "./DetailedCard.css";

function DetailedCard(props) {
  const { theme } = useContext(DarkContext);

  return (
    <>
      <Link to={`/`}>
        <button>back</button>
      </Link>
      <div className={`card-container-item-detail ${theme}-card-detail`}>
        <div className="card-container-item-detail-info">
          <img src={props.country.flags.png} alt="" />
        </div>

        <div className={`card-container-item-detail-info ${theme}-card-detail`}>
          <h3 className="list-item-title">{props.country.name.common}</h3>

          <ul className="list-wrapper-detail">
            <li className="list-item-detail">
              <b>Native Name: </b> {props.country.name.nativeName[Object.keys(props.country.name.nativeName)[0]].official}
            </li>
            <li className="list-item-detail">
              <b>Population: </b> {props.country.population.toLocaleString()}
            </li>
            <li className="list-item-detail">
              <b>Region: </b>
              {props.country.region}
            </li>
            <li className="list-item-detail">
              <b>Sub Region: </b>
              {props.country.subregion}
            </li>
            <li className="list-item-detail">
              <b>Capital: </b>
              {props.country.capital}
            </li>
          </ul>
        </div>

        <div className={`card-container-item-detail-info ${theme}-card`}>
          <ul className="list-wrapper-detail">
            <li className="list-item-detail">
              <b>Top Level Domain: </b>
              {props.country.tld}
            </li>
            <li className="list-item-detail">
              <b>Currencies: </b>
              {Object.keys(props.country.currencies).map(
                (ele) => props.country.currencies[ele]["name"]
              )}
            </li>
            <li className="list-item-detail">
              <b>Languages: </b>
              {Object.keys(props.country.languages).map(
                (ele) => props.country.languages[ele] + " "
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default DetailedCard;
