import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from "./Pages/ShopCategory"

function App() {

  return (
  <div>
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Shop />} />
      <Route path='/men' element={<ShopCategory />}/>
      <Route path='/women' element={<ShopCategory />}/>
      <Route path='/kids' element={<ShopCategory />}/>
    </Routes>

    </Router>

  </div>
  )
}

export default App
