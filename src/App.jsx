import { Outlet } from 'react-router-dom'
import './App.css'
import Navber from './components/Navber/Navber'

function App() {


  return (
    <div>
      <Navber />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default App
