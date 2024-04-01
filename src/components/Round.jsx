
import Recact, { useContext, useEffect,useState } from "react"
import { USeContext } from "../utils/Context";
function Round({id,setScore}){
   const[val,setVal]= useState(null)
   const{hit,setHit,highScore,setHighScore}=useContext(USeContext)
    function getRandomValue() {
        return Math.floor(Math.random() * 10);
      }
     useEffect(()=>{
        setVal(getRandomValue())
        
     },[hit])
     const handleClick=(e)=>{
     if(Number(e.target.innerText)===hit) 
     {
        setHit(getRandomValue())
        setScore((prev)=>{
             
            return prev+1
        })

        
     }         
     }
    return(
        <div className="w-[7vw] xl:w-[4vw] h-[7vw] xl:h-[4vw]  bg-red-500 rounded-full flex items-center justify-center text-2xl sm:text-5xl cursor-pointer" onClick={handleClick}>{val}</div>
    )
}
export default Round  