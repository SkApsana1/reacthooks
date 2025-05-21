import React ,{act, useReducer} from 'react'

const initialState={
    firstCounter:0,
    secondCounter:0
}
const reducer=(stat,action)=>{
    switch(action.type){
        case 'increment':
            return { ...stat,firstCounter:stat.firstCounter+action.value}
        case 'decrement':
            return { ...stat,firstCounter:stat.firstCounter-action.value}   
        case 'increment2':
            return { ...stat,secondCounter:stat.secondCounter+action.value}
        case 'decrement2':
            return { ...stat,secondCounter:stat.secondCounter-action.value}   
        case 'reset':
            return initialState
        default:
            return stat
    }
}

function CounterTwo() {
   const [count,dispatch]= useReducer(reducer,initialState)

    return (
    <div>
      <h1>count-{count.firstCounter}</h1>
      <h1>count-{count.secondCounter}</h1>
      <button onClick={()=>dispatch({type:'increment', value:5})} >Increment 5</button>
      <button  onClick={()=>dispatch({type:'decrement', value:5})}>Decrement 5</button>
      <button  onClick={()=>dispatch({type:'increment', value:1})} >Increment 1</button>
      <button  onClick={()=>dispatch({type:'decrement', value:1})}>Decrement 1</button>
      <button onClick={()=>dispatch({type:'increment2', value:10})} >Increment 10 counter2</button>
      <button  onClick={()=>dispatch({type:'decrement2', value:10})}>Decrement 10 counter2</button>
      <button  onClick={()=>dispatch({type:'reset'})}>Reset</button>
      
    </div>
  )
}

export default CounterTwo
