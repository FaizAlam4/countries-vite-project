/* eslint-disable react/prop-types */
import { useContext } from "react";
import DarkContext from "../Context/DarkContext";
import Card from "./Card";
import "./Container.css";

function Container({ myData }) {
  let { theme } = useContext(DarkContext);
  return (
    <section>
      {myData.length == 0 ? (
        <div
          className={`${theme}-not-found`}
          style={{
            fontSize: "4rem",
            width: "80%",
            margin: "auto",
            marginTop: "40px",
            textAlign: "center",
          }}
        >
          Countries not found
        </div>
      ) : (
        <div className="card-container">
          {myData.map((ele, index) => {
            return <Card country={ele} key={index} />;
          })}
        </div>
      )}
    </section>
  );
}

export default Container;
