import logo from './logo.svg';
import './App.css'
import Login from './Components/Login'
import Form from './Components/Form';
import Dashboard from './Components/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path = '/' element={<Form />} />
        <Route path = '/login' element={<Login />} />
        <Route path = '/dash' element={<Dashboard />} />
      </Routes>
      </BrowserRouter>
    </>
  
  );
}

export default App;
