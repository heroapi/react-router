import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './NavBar/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar /> 
       <Outlet></Outlet>
       {/* <h1>Now</h1> */}
    </div>
  )
}

export default App
