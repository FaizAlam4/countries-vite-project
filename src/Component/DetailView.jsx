import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import DetailedCard from "./DetailedCard";

function DetailView() {
  const [detailData, setDetailData] = useState([]);
  const [cardLoad, setCardLoad] = useState(true);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((data) => {
        return data.data;
      })
      .then((result) => {
        // console.log(result,"faiz")
        setCardLoad(false);
        setDetailData(result);
      });
  }, []);

  const { id } = useParams();
  // console.log(typeof id)

  return (
    <div>
      {cardLoad ? (
        <div style={{ textAlign: "center", fontSize: "2rem" }}>Loading...</div>
      ) : (
        detailData.map((country, index) => {
          if (country.cca3 == id) {
            return <DetailedCard country={country} key={index} />;
          }
        })
      )}
    </div>
  );
}

export default DetailView;
