
import Tabeltailwind from "./pages/tabeltailwind";
import { Routes, Route } from "react-router-dom";
import { Table } from "react-bootstrap";




const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Tabeltailwind />}/>
    </Routes>

    </>
  )
}

export default App