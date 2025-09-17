
import Tabeltailwind from "./pages/tabeltailwind";
import { Routes, Route } from "react-router-dom";
import { Table } from "react-bootstrap"; 
import RegisterPage from "./pages/RegisterPage"
import Masuk from "./pages/Masuk";
import Landingpage from "./pages/Landingpage";




const App = () => {
  return (
    <>
    <Routes>
      <Route path='/ui' element={<RegisterPage />}/>
      <Route path='/M' element={<Masuk />}/>
      <Route path='/' element={<Landingpage />}/>
    
    </Routes>

    </>
  )
}

export default App