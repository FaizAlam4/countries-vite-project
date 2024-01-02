import { createContext } from "react";


export const themes={
    dark:'dark',
    light:'light'
}

const DarkContext = createContext();
export default DarkContext;
