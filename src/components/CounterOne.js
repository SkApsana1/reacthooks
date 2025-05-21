import React ,{useReducer} from 'react'


const reducer=(stat,action)=>{
    switch(action){
        case 'increment':
            return stat+1
        case 'decrement':
            return stat-1
        case 'reset':
            return 0
        default:
            return stat
    }
    
}

function CounterOne() {
   const [count,dispatch]= useReducer(reducer,'')

    return (
    <div>
      <h1>count-{count}</h1>
      <button onClick={()=>dispatch('increment')} >Increment</button>
      <button  onClick={()=>dispatch('decrement')}>Decrement</button>
      <button  onClick={()=>dispatch('reset')}>Reset</button>
      
    </div>
  )
}

export default CounterOne
