import { Outlet, useNavigate } from 'react-router-dom'
import './App.css'
import Navber from './components/Navber/Navber'
import useAuth from './hooks/useAuth';

function App() {

  const { user, setUser, loading, setLoading, createUserEmailPass, signInEmailPass, googleSignIn, logOut } = useAuth();

  const navigate = useNavigate();

  if(!user) {
    navigate('/login');
  }

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
