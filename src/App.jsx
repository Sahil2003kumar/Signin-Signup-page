
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {

  return (
<Routes>
  <Route path='/Login'  element={<Login/>}/>
  <Route path='/signin'  element={<Signup/>}/>
</Routes>
  )
}

export default App
