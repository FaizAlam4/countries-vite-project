/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link } from "react-router-dom";
import DarkContext from "../Context/DarkContext";
import "./DetailedCard.css";

function DetailedCard(props) {
  const { theme } = useContext(DarkContext);
  theme === "dark"
    ? document.querySelectorAll("b").forEach((tag) => {
        tag.style.color = "white";
      })
    : document.querySelectorAll("b").forEach((tag) => {
        tag.style.color = "rgb(66, 65, 65)";
      });

  console.log(props.country);
  return (
    <>
      <Link to={`/`}>
        <button className={`btn-back ${theme}-btn`} style={{ cursor: 'pointer' }}>
          <i
            style={{ paddingRight: "5px" }}
            className="fa-solid fa-left-long"
          ></i>
          Back
        </button>
      </Link>
      <div className={`card-container-item-detail ${theme}-card-detail`}>
        <div className="card-container-item-detail-info">
          <img src={props.country.flags.png} alt="" />
          {console.log(props.country.flags.png)}
        </div>

        <div className={`card-container-item-detail-info `}>
          <h3 className="list-item-title">{props.country.name.common}</h3>

          <ul className="list-wrapper-detail">
            <li className="list-item-detail">
              <b className={`${theme}-bold`}>Native Name: </b>{" "}
              {props.country.name.nativeName
                ? props.country.name.nativeName[
                    Object.keys(props.country.name.nativeName)[0]
                  ].official
                : "No native name available"}
            </li>
            <li className="list-item-detail">
              <b className={`${theme}-bold`}>Population: </b>{" "}
              {props.country.population.toLocaleString()}
            </li>
            <li className="list-item-detail">
              <b className={`${theme}-bold`}>Region: </b>
              {props.country.region}
            </li>
            <li className="list-item-detail">
              <b className={`${theme}-bold`}>Sub Region: </b>
              {props.country.subregion}
            </li>
            <li className="list-item-detail">
              <b className={`${theme}-bold`}>Capital: </b>
              {props.country.capital
                ? props.country.capital
                : "Region has no capital"}
            </li>
          </ul>
        </div>

        <div className={`card-container-item-detail-info`}>
          <ul className="list-wrapper-detail">
            <li className="list-item-detail">
              <b>Currencies: </b>
              {props.country.currencies ? (
                Object.keys(props.country.currencies).map((ele) => {
                  return props.country.currencies[ele]["name"];
                })
              ) : (
                <div>No currencies</div>
              )}
            </li>
            <li className="list-item-detail">
              <b className={`${theme}-bold`}>Languages: </b>
              {props.country.languages ? (
                Object.keys(props.country.languages).map(
                  (ele) => props.country.languages[ele] + " "
                )
              ) : (
                <div>No languages are spoken here</div>
              )}
            </li>
          </ul>
        </div>

        <div className="card-container-item-detail-info">
          <div className="detail-itm">
            <div className="detail-itm-in-1">
              <b className={`${theme}-bold`}>Border Countries:</b>
            </div>
            {props.country.borders ? (
              props.country.borders.map((country, index) => {
                return (
                  <div key={index} className={`detail-itm-in ${theme}-btn`}>
                    {country}
                  </div>
                );
              })
            ) : (
              <div>No border available</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailedCard;
