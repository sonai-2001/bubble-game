
import React, { createContext, useContext, useEffect, useState } from "react"

export const USeContext =createContext()
function Context(props){
  
  const [hit,setHit]=  useState(getRandomValue())
  const [highScore,setHighScore]=  useState(0)
  
  function getRandomValue() {
    return Math.floor(Math.random() * 10);
  }
  
  
    return(
        <USeContext.Provider value={{hit,setHit,highScore,setHighScore}}>{props.children}</USeContext.Provider>
    )
}
export default Context