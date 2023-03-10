import {useState} from "react"
function Solution3(){
   let [name,setName]= useState("Amit");
   function changeNamehandler(){
    if(name=="Amit"){
        setName(name="Rajan");
    }
    else{
     setName(name="Amit");
    }
   }
    return (
        <div>
         <h1 style={{color:"blueviolet"}}>Solution3</h1>
            <h1>My name is {name}</h1>
            <button onClick={changeNamehandler}>Change Name</button>
        </div>
    )
}
export default Solution3;