import { useParams } from "react-router-dom"
import axios from 'axios'
import { useState } from "react"
import DetailedCard from "./DetailedCard";


function DetailView() {

    const [detailData,setDetailData]=useState([]);

axios.get('https://restcountries.com/v3.1/all').then((data)=>{
  return data.data
}).then((result)=>{
    // console.log(result,"faiz")

setDetailData(result)
})


    const {id}=useParams();


  return (
    <div>{detailData.map((country,index)=>{
      if(country.ccn3===id){
    return (<DetailedCard country={country} key={index}/>)
      }  
    })}</div>
  )
}

export default DetailView