
import Tabeltailwind from "./pages/tabeltailwind";
import { Routes, Route } from "react-router-dom";
import { Table } from "react-bootstrap"; 
import RegisterPage from "./pages/RegisterPage"
import Masuk from "./pages/Masuk";
import Landingpage from "./pages/Landingpage";
import Tambahdata from "./pages/Tambahdata"
import Tabeldata from "./pages/Tabeldata";
import Editdata from "./pages/Editdata";




const App = () => {
  return (
    <>
    <Routes>
      <Route path='/U' element={<Tabeldata/>}/>
      <Route path='/T' element={<Tambahdata />}/>
      <Route path='/S' element={<Editdata />}/>
    
    </Routes>

    </>
  )
}

export default App