import "./App.css";
import Navigation from "./Component/Navigation";
import MainSection from "./Component/MainSection";
 import DarkContext,{themes} from "./Context/DarkContext.js";
import { useState } from "react";


function App() {

  const[theme,setTheme]=useState(themes.light)

  let toggleMode = () => {
   theme===themes.light? setTheme(themes.dark):setTheme(themes.light)
   console.log("Clicked")
    };
 
  return (
    <DarkContext.Provider value={{theme,toggleMode}}>
      <Navigation />
      <MainSection />
    </DarkContext.Provider>
  );
}

export default App;
