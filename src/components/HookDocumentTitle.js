import React,{useEffect, useState} from 'react'

function HookDocumentTitle() {
    const [count,setCount]=useState(0)
    useEffect(()=>{
      document.title=`clicked ${count}`
    })
   
  return (
    <div>
        <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Clicked {count} Times </button>
    </div>
  )
}

export default HookDocumentTitle
