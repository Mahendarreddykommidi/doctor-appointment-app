import { createContext } from "react";
import { doctors } from "../assets/assets_frontend/assets";

export const Appcontext = createContext();

 const Appcontextprovider = (props) => {
    // Create a stable value object
    const value = {
        doctors
    };
    
    return (
        <Appcontext.Provider value={value}>
        {props.children}
       </Appcontext.Provider>
    );
};

export default Appcontextprovider

