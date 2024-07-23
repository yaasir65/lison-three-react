 

import { useState } from "react"

function  Lighti (){

    const [color,setColor] = useState ("felse")

    //hondle on button

    const handleOnButtom = ()  =>{
        setColor(true)
        
    
    }

    const handleofButtom= ()  =>{
        setColor(false)
        

    }
     
    
    

   return <div>
 
 <div style={{backgroundColor: color === true ? "yellow" : ""}} className=" border  border-black  mt-8 w-[370px]  h-[370px]  rounded-full  ml-[300px]">
  
  </div>

  <div className=" ml-[380px] ">
  <button style={{backgroundColor: color === true ? "red" : ""}}  onClick={handleOnButtom} className="p-4  border  hover:  w-[90px] h-[60px] mt-5  bg-blue-600">   on</button>
  <button style={{backgroundColor: color === false? "red" : ""}}    onClick={handleofButtom} className="p-4  border w-[90px] h-[60px] ml-2   mt-5 bg-green-500">off</button>
  </div>
    </div>
    
} 

export default Lighti