
import Tabeltailwind from "./pages/tabeltailwind";
import { Routes, Route } from "react-router-dom";
import { Table } from "react-bootstrap"; 
import RegisterPage from "./pages/RegisterPage"
import Masuk from "./pages/Masuk";
import Landingpage from "./pages/Landingpage";
import Tambahdata from "./pages/Tambahdata"
import Tabeldata from "./pages/Tabeldata";
import Editdata from "./pages/Editdata";
import Sidnav from "./component/sidnav";
import Dashboard from "./component/Dashboard";




const App = () => {
  return (
    <div>
      <Sidnav/>
      <div>
  
    <Routes>
      <Route path='/w' element={<Tabeldata/>}/>
      <Route path='/E' element={<Dashboard/>}/>
      <Route path='/T' element={<Tambahdata />}/>
      <Route path="/edit/:id" element={<Editdata />}/>
    
    </Routes>
      </div>
    </div>
  )
}

export default App