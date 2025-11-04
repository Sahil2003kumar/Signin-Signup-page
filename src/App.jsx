
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
export const serverUrl="http://localhost:8000"
function App() {

  return (
<Routes>
  <Route path='/signin'  element={<Login/>}/>
  <Route path='/signup'  element={<Signup/>}/>
</Routes>
  )
}

export default App
