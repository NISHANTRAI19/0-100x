
import { useState } from 'react';
import './App.css'
import Todo from './component/Todo'

function App() {
  
    id:1,
    title: "Go TO GYM",
    description:"Consistency"
  },{
    id:2,
    title: "Study",
    description:"Consistency"
  },{
    id:3,
    title: "Play",
    description:"Consistency"
  }]);

  return (
    <>
    <Todo todos={todo}/>
    </>
  )
}

export default App
