
import Tabeltailwind from "./pages/tabeltailwind";
import { Routes, Route } from "react-router-dom";
import { Table } from "react-bootstrap"; 
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/Loginpage";




const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<RegisterPage />}/>
    </Routes>

    </>
  )
}

export default App