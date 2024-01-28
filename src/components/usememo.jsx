import React,{useMemo, useState} from "react";
const Memo=()=>{
    const [number,UpdateNumber]=useState(0);
    const [dark, updatetheme]=useState(false);
    const doubleNumber = useMemo(()=>{
        return doubleNumberSlow(number)
    },[number])
    function doubleNumberSlow(number){
         return number*2;
        
    }
    const Theme = useMemo(()=>{
        return {
        backgroundColor:dark?"black":"white",
        color:dark?"white":"black"
    }
    },[dark])
    return(
        <><h1>Number type {number} </h1>
        <input type="number" value={number} onChange></input> <br />
        <button onClick={()=>{updatetheme(dark =>!dark)}}>Change Theme</button>
        <h2 style={Theme}>The doubled number is {doubleNumber} <br /><br /><br /></h2>
        </>
    )
}
export default Memo