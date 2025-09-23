
import Tabeltailwind from "./pages/tabeltailwind";
import { Routes, Route } from "react-router-dom";
import { Table } from "react-bootstrap"; 
import RegisterPage from "./pages/RegisterPage"
import Masuk from "./pages/Masuk";
import Landingpage from "./pages/Landingpage";
import Tambahdata from "./pages/Tambahdata"
import Tabeldata from "./pages/Tabeldata";




const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Tambahdata />}/>
    
    </Routes>

    </>
  )
}

export default App