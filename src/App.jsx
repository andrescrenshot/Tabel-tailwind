
import { Routes, Route } from "react-router-dom";
import Tambahdata from "./pages/Tambahdata"
import Tabeldata from "./pages/Tabeldata";
import Editdata from "./pages/Editdata";
import Sidnav from "./component/sidnav";
import Dashboard from "./component/Dashboard";
import Profile from "./component/Profile";




const App = () => {
  return (
    <div>
      <Sidnav/>
      <div>
  
    <Routes>
      <Route path='/w' element={<Tabeldata/>}/>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/Q' element={<Profile/>}/>
      <Route path='/T' element={<Tambahdata />}/>
      <Route path="/edit/:id" element={<Editdata />}/>
    
    </Routes>
      </div>
    </div>
  )
}

export default App