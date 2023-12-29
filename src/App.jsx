import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "./Card";
import Navigation from "./Navigation";

function App() {
 
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => res.data)
      .then((data) => {
        setData(data);
     
      });
     
  }, []);

  
  let [data,setData]=useState([]);
  var arr=[];
  let [filterRegion,setFilterRegion]=useState('all');
  let [inputValue,setInputValue]=useState('');


  let ans=data.filter((country)=>{
    if(country.name.common.toLowerCase().includes(inputValue) && country.region==filterRegion) return true;
    else if(filterRegion=='all') {
      return (country.name.common.toLowerCase().includes(inputValue))
    }
  })

  let handleFilter=(e)=>{
 if(e.target.id=='filter-region'){
  let filtered=e.target.value;
  console.log(filtered)
     setFilterRegion(filtered) 
    
    }
     
  }

  let handleSearchBox=(e)=>{
      let enteredValue=e.target.value.trim().toLowerCase();
      console.log(enteredValue)
      setInputValue(enteredValue)
   
      }
  
    
  
  return (
    <div className="outermost">
   
      <Navigation/>

      <div className="input-filter">

        <div className="input-filter-item">
          <label htmlFor="filter-icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </label>
          <input
            id="filter-icon"
            placeholder="Search for a country"
            type="text" onChange={handleSearchBox}
          />
        </div>

        <div className="input-filter-item" onClick={handleFilter} >
          <select name="my-region" id="filter-region">
          <option value="all">Filter by Region</option>
    {
     data.map((country,index)=>{
      if(!arr.includes(country.region)){
        arr.push(country.region);
          return(
<option key={index} value={country.region}>{country.region}</option>
          )
         
      }
   
     })
    }
        </select>
        </div>
      </div>

      <section>
        <div className="card-container">
        {
       ans.map((ele, index)=>{
        return (<Card country={ele} key={index} />)
       })
      }
  
        </div>
     
      </section>
    </div>
  )
}

export default App
