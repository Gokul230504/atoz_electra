import React from "react";
import { useState, useRef, useEffect } from "react";
const RefeRence=()=>{
    const [batchSize,Update]= useState(0)
    const prev=useRef(batchSize)
    useEffect(()=>{
        prev.current= batchSize
    },[batchSize])
   return(
    <><h1>Type your reviews here..</h1>
    <input type="text" onChange={(event)=>{Update(event.target.value)}}/>
    <h2>Your review is</h2><h3>{batchSize}</h3><h2>Check if you typed is correct hence go nd update</h2><h3>{prev.current}</h3></>)
}
export default RefeRence;