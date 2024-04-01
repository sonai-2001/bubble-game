

import Nav from "./Nav"
import Round from "./Round"
import React, { useContext, useEffect, useState } from 'react';
import { USeContext } from '../utils/Context';
import End from './End'


function Box(){
     var array =[]
     for(var i=0;i<91;i++){
         array.push(i)
     }
     console.log('hui')
     const [time,setTime]=  useState(60)
     const [score,setScore]=  useState(0)
     const{setHighScore}=useContext(USeContext)
     useEffect(()=>{
        setHighScore(score)
        if(time<1)
        {return}
        const timer = setInterval(()=>{
          setTime(time-1)
        },30000)
        return ()=>{
          clearInterval(timer)

        }
      },)
     
    
    return time>0?(
        <div className="box w-[90%] h-[90%] bg-red-300">
          <Nav time={time} score={score}/>
       
      
        <div className="w-full h-[90%] bg-zinc-300 p-3 flex flex-wrap gap-[3%]">
         
          {array.map((item,index)=>{
            return <Round key={index} id={index} setScore={setScore} />
          })}
        </div>
      </div>
    ):<End score={score}/>
}
export default Box