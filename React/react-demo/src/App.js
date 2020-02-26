import React from 'react';
import {Login} from './components/login'
import {Theme} from './components/subject/page'
import Home from './components/Home'
import Parent from './components/Update/parent'
import Hook from './components/hook'
import './App.css';


function App() {
  return (
    <div className="App">
      <Login login={(userName)=>(<h1>{userName}</h1>)} nologin={()=>(<h1>nologin</h1>)}></Login>
      <Theme />
      <Home name='home'/>
      <Parent></Parent>
      <Hook></Hook>
    </div>
  );
}

export default App;
