/* eslint-disable react/prop-types */
import { useContext } from "react";
import DarkContext from "../Context/DarkContext";
import './DetailedCard.css'

function DetailedCard(props) {
  const {theme}=useContext(DarkContext)

  return (
  
    <div className="card-container-item-detail">
      <button>back</button>
      <div className="card-container-item-detail">
        <img src={props.country.flags.png} alt="" />
      </div>
      <div className={`card-container-item-2 ${theme}-card`}>  
       <li className="list-item">
            <b className={`${theme}-card`}>Languages: </b>
           {Object.keys(props.country.languages).map((ele)=>{
               (props.country.languages[ele])
})}
          </li>
        <h3 className="list-item-title">{props.country.name.common}</h3>

        <ul className="list-wrapper">
          <li className="list-item">
            <b className={`${theme}-card`}>Population: </b> {props.country.population}
          </li>
          <li className="list-item">
            <b className={`${theme}-card`}>Region: </b>
            {props.country.region}
          </li>
          <li className="list-item">
            <b className={`${theme}-card`}>Sub Region: </b>
            {props.country.subregion}
          </li>
          <li className="list-item">
            <b className={`${theme}-card`}>Capital: </b>
            {props.country.capital}
          </li>
          <li className="list-item">
            <b className={`${theme}-card`}>Top Level Domain: </b>
            {props.country.tld}
          </li>
          <li className="list-item">
            <b className={`${theme}-card`}>Currencies: </b>
            {props.country.tld}
          </li>
          <li className="list-item">
            <b className={`${theme}-card`}>Languages: </b>
           {Object.keys(props.country.languages).map((ele)=>[
               (props.country.languages[ele]+' ')
           ])}
          </li>
        </ul>
      </div>
    </div>

  );
}

export default DetailedCard;
