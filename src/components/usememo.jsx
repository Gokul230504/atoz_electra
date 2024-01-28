import React,{useMemo, useState} from "react";
const Memo=()=>{
    const [number,UpdateNumber]=useState(0)
    const doubleNumber = doubleNumberSlow(number);
    const doubleNumberSlow=(num)=>{
        for(let i=0;i<1000000000000000;i++)
        {
         return num*2;
        }
    }
    return(
        <><h1>Number type{number} </h1>
        <input type="number" value></input>
        <h2>The doubled number is{doubleNumber}</h2>
        </>
    )
}
export default Memo