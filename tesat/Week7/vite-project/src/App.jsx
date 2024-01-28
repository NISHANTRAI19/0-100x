
import {useNavigate,BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Landing from './components/Landing'
import Dashboard from './components/Dashboard'

function App() {


  return (
    <>
      <BrowserRouter>
      <Bar/>
      
        <Routes>

          <Route path='/' element=<Landing/>/>
          <Route path ='/dashboard' element=<Dashboard/>/>

        </Routes>
      
      </BrowserRouter>
    </>
  )

}



const Bar=()=>{

  const navigate= useNavigate();


  return (
    <>

    <button onClick={()=>navigate('/dashboard')}>Dashboard</button>
    <button onClick={()=>navigate('/')}>Landing</button>
    
    
    </>

  )
}

export default App;