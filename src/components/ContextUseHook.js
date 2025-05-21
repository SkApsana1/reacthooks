import React,{useContext} from 'react'
import {UserContext,ChannelContext} from '../App'

function ContextUseHook() {
    const user=useContext(UserContext)
    const channel=useContext(ChannelContext)
    
  return (
    <div>
      Hi user's {user}-{channel}
    </div>
  )
}

export default ContextUseHook
