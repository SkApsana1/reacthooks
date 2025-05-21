// import logo from './logo.svg';
import { formToJSON } from 'axios';
import './App.css';
import ContextUseHook from './components/ContextUseHook';
import FetchWitEffect from './components/FetchWitEffect';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
// import ConterClass from './components/ConterClass';
// import CounterFunc from './components/CounterFunc';
// import Resetcounter from './components/Resetcounter';

// import HookObject from './components/HookObject';
// import DocumentTitle from './components/DocumentTitle';
// import HookDocumentTitle from './components/HookDocumentTitle';
// import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import React ,{useReducer}from 'react';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
export const UserContext=React.createContext()
export const ChannelContext=React.createContext()



function App() {
 
  return (
    <div className="App">
      
      {/* <ConterClass/> */}
      {/* <CounterFunc/> */}
      {/* <Resetcounter/> */}
      {/* <HookObject/> */}
      {/* <DocumentTitle/> */}
      {/* <HookDocumentTitle/> */}
      {/* <HookMouse/> */}
      {/* <MouseContainer/> */}
      {/* <IntervalClassCounter/> */}
      {/* <IntervalHookCounter/> */}
      {/* <FetchWitEffect/> */}
      {/* <UserContext.Provider value={"Apsana"}>
        <ChannelContext.Provider value={"Apsana 1"}>
               <ContextUseHook/>
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <CounterOne/>
      <CounterTwo/> */}

    </div>
  );
}

export default App;
