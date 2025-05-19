import React,{useState} from 'react'

function Resetcounter() {
    const initialCount=0
    const [count,setCount]=useState(initialCount)
    const incrementFive=()=>{
        for(let i=0;i<5;i++){
            setCount((h)=>h+1)
        }
    }

  return (
    <div>
        <h1>count:{count}</h1>
      <button onClick={()=>setCount(initialCount)}>Reset</button>
      <button onClick={()=>setCount(count+1)}>Increment</button> 
      <button onClick={()=>setCount(count-1)}>Decrement</button>
      <button onClick={incrementFive}>Increment Five</button>
      
    </div>
  )
}

export default Resetcounter
