
import React, { useContext, useEffect, useState } from 'react';
import {USeContext} from '../utils/Context';
import { Link } from 'react-router-dom';
function High(){
const {highScore,setHighScore}=useContext(USeContext)

const[val,setVal]=useState(0)
useEffect(()=>{
   if(highScore>val){
    setVal(highScore)
   }
},[highScore])
return (
<div className="flex flex-col items-center justify-center w-[30%] h-[30%]  gap-10">
    <h1 className='text-center  w-full'>high score is {val}</h1>
    <Link to="/bubble-game" className=" rounded-md bg-sky-200 text-2xl text-red-300">Home</Link>


</div>


)
}
export default High