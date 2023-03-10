import {useState} from "react"
function Solution2(){
    const [data,setData]=useState(0)
    return (
        <div style={{borderRight:"5px black solid"}}>
         <h1 style={{color:"blueviolet"}}>Solution2</h1>
            <h1 style={{color:"red" , marginLeft:"100px"}}>{data}</h1>
            <button onClick={()=>setData(data+1)}>Increase Count</button> &nbsp; 
            <button onClick={()=>setData(data-1)}>Decrease Count</button> &nbsp;
        </div>
    )
}
export default Solution2;