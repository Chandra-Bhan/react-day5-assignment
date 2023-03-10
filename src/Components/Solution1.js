

// Task 1

import {useState} from "react"
let listOfArray=[]
function Solution1(){
   const [data,setData]= useState("")
     let textVal;
     
   function handleOnChange(e){
     textVal=e.target.value;  
   }

   function handleData(){
    listOfArray.push(textVal)
    console.log(listOfArray)
    setData(textVal)
   }

    return(
        <div style={{borderRight:"5px black solid"}}>
            <h1 style={{color:"blueviolet"}}>Solution1</h1>
            <input type="text" onChange={handleOnChange}/> &nbsp;        
            <button onClick={handleData}>Add</button> &nbsp;  

            {
            listOfArray.map((item,i)=>
                <h3 key={i}>{item}</h3>
            )

            }
        </div>
    )
}
export default Solution1;