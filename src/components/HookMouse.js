import React,{useState,useEffect} from 'react'

function HookMouse() {
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)

    const logmousePosition=e=>{
        console.log('mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log("Use Effect")
        window.addEventListener('mousemove',logmousePosition)

        return()=>{
            console.log("Component Unmouted")
            window.removeEventListener('mousemove',logmousePosition)
        }
    },[])

  return (
    <div>
      Hooks X - {x}  Y - {y}
    </div>
  )
}

export default HookMouse
