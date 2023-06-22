'use client'
import DatamapsIndia from "react-datamaps-india";
import { getSociety, getStatesUnderSociety } from "../Utils";
import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import { flushSync } from "react-dom";
export default function IndiaMap(){
const [sector , setSector] = useState("saharayn universal multipurose society limited");
const handleChange = (value)=> {
  flushSync (()=>setSector(value ?? sector));

}
    return (
      <>
      
     <h1 
     className=" mt-20  text-4xl font-bold text-black drop-shadow-lg shadow-gray-500">
      Select Sector to find Area of Operation</h1>
      <div className="my-12">

<Autocomplete
disablePortal
options={getSociety()}
sx={{ width: 300 }}
onChange={(_,value)=>{handleChange(value);}}
renderInput={(params) => <TextField {...params} label="Select Sector"  />}
/>
</div>
      <div style={{ position: "relative" }}>
    
       <DatamapsIndia
         style={{ postion: "relative", left: "25%" }}
         regionData={getStatesUnderSociety(sector)}
         hoverComponent={({ value }) => {
           return (
             <div>
               <div>
                 {value.name}
               </div>
             </div>
           );
         }}
         mapLayout={{
           title: sector,
           legendTitle: "Area of Operation",
           startColor: "white",
           endColor: "green",
           hoverTitle: "Count",
           noDataColor: "#f5f5f5",
           borderColor: "#8D8D8D",
           hoverColor: "green",
           hoverBorderColor: "orange",
           height: 2,
           weight: 3,
         }}
       />
     </div>
      
      
      
      </>
        
      );
}

