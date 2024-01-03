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
        <button className="btn-back">
          <i
            style={{ paddingRight: "5px" }}
            className="fa-solid fa-left-long"
          ></i>{" "}
          Back
        </button>
      </Link>
      <div className={`card-container-item-detail ${theme}-card-detail`}>
        <div className="card-container-item-detail-info">
          <img src={props.country.flags.png} alt="" />
          {/* {console.log(props.country.flags.png)} */}
        </div>

        <div className={`card-container-item-detail-info `}>
          <h3 className="list-item-title">{props.country.name.common}</h3>

          <ul className="list-wrapper-detail">
            <li className="list-item-detail">
              <b>Native Name: </b>{" "}
              {
                props.country.name.nativeName[
                  Object.keys(props.country.name.nativeName)[0]
                ].official
              }
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

        <div className={`card-container-item-detail-info`}>
          <ul className="list-wrapper-detail">
            <li className="list-item-detail">
              <b>Top Level Domain: </b>
              {props.country.tld}
            </li>
            <li className="list-item-detail">
              <b>Currencies: </b>
              {
                Object.keys(props.country.currencies).map(
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

        <div className="card-container-item-detail-info">
          <div className="detail-itm">
            <div className="detail-itm-in-1">
              <b>Border Countries:</b>
            </div>
            {props.country.borders.map((country, index) => {
              return (
                <div key={index} className={`detail-itm-in`}>
                  {country}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailedCard;
