import React,{useState,useEffect} from 'react'

function IntervalHookCounter() {
    const [count,setCount]=useState(0)
    const tick=()=>{
        setCount(count+1)
    }
    useEffect(()=>{
        const interval=setInterval(tick,1000)
        return()=>{
            clearInterval(interval)
        }
    })

  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

export default IntervalHookCounter
