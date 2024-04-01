
import React from "react"
import { Link } from "react-router-dom"
function Home(){
    return(
      <div className="w-[80%] h-[40%]  flex flex-col justify-around">
        <h1 className="text-5xl text-center">welcome to my Bubble Game</h1>
        <div className='mr-5 flex justify-center '>
                <Link to="/box" className="px-[3vw] py-[1.5vw] rounded-md bg-sky-200 mr-4 text-3xl text-red-300 hover:text-pink-400">Play game</Link>
                <Link to="/high" className="px-[3vw] py-[1.5vw] rounded-md  bg-sky-200  text-3xl text-red-300 hover:text-pink-400">High score</Link>
            </div>
        
      </div>
    )
}
export default Home