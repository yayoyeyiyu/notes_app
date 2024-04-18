
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { useDispatch, useSelector } from 'react-redux'
import ProtectedRoutes from './components/ProtectedRoutes'
import Notification from './components/Notification'

function App() {



  return (
    <HashRouter>
      <Notification />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
