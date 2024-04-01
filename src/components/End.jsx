
import React, { useContext } from 'react';
import { USeContext } from '../utils/Context';
import { Link } from 'react-router-dom';
function End({score}){
    const{hit,setHit}=useContext(USeContext)
    return(
        <div className='w-[60%] h-[50%]  flex items-center justify-center'>
            
         <div className="text-3xl sm:text-5xl flex flex-col gap-20">  
            <h1 className=' text-center'>Game Over and your score is  {score}</h1>
            <div className='mr-4 flex justify-around'>
                <Link to="/bubble-game" className="px-[3vw] py-[1.5vw] rounded-md bg-sky-200 mr-4 text-3xl text-red-300">Home</Link>
                <Link to="/bubble-game/high" className="px-[3vw] py-[1.5vw] rounded-md  bg-sky-200  text-3xl text-red-300">High score</Link>
            </div>
            </div> 
        </div>
    )
}
export default End