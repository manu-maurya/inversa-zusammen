import { Route, Routes } from "react-router-dom";
import "./index.css";
import Final from "./pages/Final";
import Form from "./pages/Form";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path="/form" element={<Form/>}/>
      <Route path="/final" element={<Final/>}/>
    </Routes>
  );
}

export default App;
