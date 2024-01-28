import React,{useMemo, useState} from "react";
const Memo=()=>{
    const [number,UpdateNumber]=useState(0);
    const [dark, updatetheme]=useState(false);
    const doubleNumber = doubleNumberSlow(number);
    const doubleNumberSlow=(num)=>{
        for(let i=0;i<1000000000000000;i++)
        {
         return num*2;
        }
    }
    const Theme = useMemo(()=>{
        return {
        backgroundColor:dark?"black":"white",
        color:dark?"white":"black"
    }
    },[dark])
    return(
        <><h1>Number type{number} </h1>
        <input type="number" value={number} onClick></input>
        <button onClick={()=>{updatetheme(dark =>!dark)}}>Change Theme</button>
        <h2 style={Theme}>The doubled number is{doubleNumber}</h2>
        </>
    )
}
export default Memo