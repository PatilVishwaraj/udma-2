import './App.css';
import AllUsers from './components/AllUsers';
import UDMA from './components/UDMA';
import NavBar from './components/NavBar';
import CreateUsers from './components/CreateUsers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditUsers from './components/EditUser';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<UDMA />} />
        <Route path="/list" element={<AllUsers />} />
        <Route path="/create" element={<CreateUsers />} />
        <Route path="/edit/:id" element={<EditUsers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
