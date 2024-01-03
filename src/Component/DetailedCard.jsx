/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link } from "react-router-dom";
import DarkContext from "../Context/DarkContext";
import "./DetailedCard.css";

function DetailedCard(props) {
  const { theme } = useContext(DarkContext);

  return (
    <>
    <Link to={`/`}><button >back</button></Link> 
    <div className="card-container-item-detail">
     
      <div className="card-container-item-detail-info">
        <img src={props.country.flags.png} alt="" />
      </div>

      <div className={`card-container-item-detail-info ${theme}-card-detail`}>
        <h3 className="list-item-title">{props.country.name.common}</h3>

        <ul className="list-wrapper-detail">
          <li className="list-item-detail">
            <b className={`${theme}-card`}>Population: </b>{" "}
            {props.country.population}
          </li>
          <li className="list-item-detail">
            <b className={`${theme}-card`}>Region: </b>
            {props.country.region}
          </li>
          <li className="list-item-detail">
            <b className={`${theme}-card`}>Sub Region: </b>
            {props.country.subregion}
          </li>
          <li className="list-item-detail">
            <b className={`${theme}-card`}>Capital: </b>
            {props.country.capital}
          </li>
        </ul>
      </div>

      <div className={`card-container-item-detail-info ${theme}-card`}>
        <ul className="list-wrapper-detail">
          <li className="list-item-detail">
            <b className={`${theme}-card`}>Top Level Domain: </b>
            {props.country.tld}
          </li>
          <li className="list-item-detail">
            <b className={`${theme}-card`}>Currencies: </b>
            {props.country.tld}
          </li>
          <li className="list-item-detail">
            <b className={`${theme}-card`}>Languages: </b>
            {Object.keys(props.country.languages).map((ele) => props.country.languages[ele] + " "
            )}
          </li>
        </ul>
      </div>
    </div>
    </>
  );
}

export default DetailedCard;
