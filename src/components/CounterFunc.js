import React,{useState} from 'react'

function CounterFunc() {
    const [count,setCount]=useState(0)
    const clickHandler=()=>{
        setCount(count+1)
    }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>clickHandler()}>Increase Number</button>
    </div>
  )
}

export default CounterFunc
