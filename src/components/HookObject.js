import React,{useState} from 'react'

function HookObject() {

    const [name,setName]=useState({firstName:'',lastName:''})
  return (
      <form>
        <input type="text" value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})}/>
        <input type='text' value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})}/>
        <h1>Your first Name - {name.firstName}</h1>
        <h1>Your last Name - {name.lastName}</h1>
        
      </form>
  )
}

export default HookObject
