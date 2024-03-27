import './App.css'
import Login from './Components/Login'
import Form from './Components/Form';
import Dashboard from './Components/Dashboard';
import Profile from './Components/Profile';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path = '/' element={<Form />} />
        <Route path = '/login' element={<Login />} />
        <Route path = '/dash/:id' element={<Dashboard />} />
        <Route path = '/profile/:id' element = {<Profile />} />
      </Routes>
      </BrowserRouter>
    </>
  
  );
}

export default App;
