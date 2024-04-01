
import React, { useContext } from 'react';
import { USeContext } from '../utils/Context';

function Nav(props){
   const {time,score}=props
   const{hit,setHit}=useContext(USeContext)
    return (
        <div className="nav bg-green-300 w-full h-[10%] flex items-center justify-around">
        <div className="flex  w-fit gap-[30%] text-3xl sm:text-5xl">
          <h2>hit</h2>
          <span className="bg-white w-fit px-1 flex items-center justify-center rounded">{hit}</span>
          </div> 
        <div className="flex  w-fit gap-[30%] text-3xl sm:text-5xl">
          <h2>timer</h2>
          <span className="bg-white w-fit px-1 flex items-center justify-center rounded">{time}</span>
          </div>
        <div className="flex  w-fit gap-[30%] text-3xl sm:text-5xl">
          <h2>score</h2>
          <span className="bg-white w-fit px-1 flex items-center justify-center rounded">{score}</span>
          </div>
      </div>
    )
}
export default Nav