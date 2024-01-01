import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "./Card";
import Navigation from "./Navigation";

// export const ThemeContext=React.createContext();

function App() {
  // let [darkMode, setDarkMode] = useState(true);
  let [data, setData] = useState([]);
  var arr = [];
  let [filterRegion, setFilterRegion] = useState("all");
  let [subRegion, setSubRegion] = useState("all");
  let [load, setLoad] = useState(true);
  let [myerror, setError] = useState(null);
  let [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setLoad(true);
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => res.data)
      .then((data) => {
        setData(data);
        setLoad(false);
      })
      .catch(() => {
        setLoad(false);
        setError("There is an error fetching the data..........");
      });
  }, []);

  let ans = data.filter((country) => {
    if (subRegion != "all" && filterRegion != "all") {
      if (
        country.name.common.toLowerCase().includes(inputValue) &&
        country.region == filterRegion &&
        country.subregion == subRegion
      ) {
        return true;
      }
    } else if (filterRegion == "all" && subRegion != "all") {
      return (
        country.name.common.toLowerCase().includes(inputValue) &&
        country.subregion == subRegion
      );
    } else if (filterRegion != "all" && subRegion == "all") {
      return (
        country.name.common.toLowerCase().includes(inputValue) &&
        country.region == filterRegion
      );
    } else {
      return country.name.common.toLowerCase().includes(inputValue);
    }
  });

  let arr1 = [];
  data.forEach((ele) => {
    if (filterRegion == "all") {
      if (!arr1.includes(ele.subregion)) {
        arr1.push(ele.subregion);
      }
    } else if (filterRegion != "all") {
      if (ele.region == filterRegion && !arr1.includes(ele.subregion)) {
        arr1.push(ele.subregion);
      }
    }
  });

  let handleFilter = (e) => {
    if (e.target.id == "filter-region") {
      let filtered = e.target.value;
      console.log(filtered);
      setFilterRegion(filtered);
      setSubRegion("all");
    }
  };

  let handleSubFilter = (e) => {
    if (e.target.id == "filter-subregion") {
      let subFiltered = e.target.value;
      setSubRegion(subFiltered);
    }
  };

  let handleSearchBox = (e) => {
    let enteredValue = e.target.value.trim().toLowerCase();
    console.log(enteredValue);
    setInputValue(enteredValue);
  };
  if (load && myerror == null) {
    return (
      <div
        style={{
          fontSize: "5rem",
          width: "200px",
          height: "200px",
          margin: "auto",
          marginTop: "20%",
        }}
      >
        Loading.....
      </div>
    );
  }

  if (myerror != null) {
    return (
      <div
        style={{
          fontSize: "5rem",
          width: "200px",
          height: "200px",
          margin: "auto",
          marginTop: "20%",
        }}
      >
        Error occured.....
      </div>
    );
  }

  return (
    <div className="outermost">
      <Navigation />

      <div className="input-filter">
        <div className="input-filter-item">
          <label htmlFor="filter-icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </label>
          <input
            id="filter-icon"
            placeholder="Search for a country"
            type="text"
            onChange={handleSearchBox}
          />
        </div>

        <div className="input-filter-item" onClick={handleFilter}>
          <select name="my-region" id="filter-region">
            <option value="all">Filter by Region</option>
            {data.map((country, index) => {
              if (!arr.includes(country.region)) {
                arr.push(country.region);
                return (
                  <option key={index} value={country.region}>
                    {country.region}
                  </option>
                );
              }
            })}
          </select>
        </div>

        <div className="input-filter-item" >
          <select name="my-subregion" value={subRegion} onChange={handleSubFilter} id="filter-subregion">
            <option value="all" key="">
              Filter by Subregion
            </option>
            {arr1.map((subregion, index) => {
              return (
                <option value={subregion} key={index}>
                  {subregion}
                </option>
              );
            })}
          </select>
        </div>

        <div className="input-filter-item">
          <select name="filter by" id="">
            <option value="">Filter by</option>
            <option value="">Sort by population(ascending)</option>
            <option value="">Sort by population(descending)</option>
            <option value="">Sort by area(ascending)</option>
            <option value="">Sort by area(descending)</option>
          </select>
        </div>
      </div>

      <section>
        {ans.length == 0 ? (
          <div
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
            {ans.map((ele, index) => {
              return <Card country={ele} key={index} />;
            })}
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
