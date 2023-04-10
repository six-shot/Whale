
import "./App.css"
import Home from "./Pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Rerr from "./Pages/rerr"
import EditWhale from "./Pages/EditWhale"

function App() {
  return (
    <div className=' '>
     <Router>
      <Routes>
        <Route path="/" exact  element={<Home/>}/>
        
        <Route path='/details/:id' element={<EditWhale />} />
        <Route path='new' element={<Rerr/>} />
      </Routes>
     </Router>

    
    </div>
  )
}

export default App
