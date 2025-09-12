import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import HomePage from './pages/HomePage.jsx';
import TareasPage from './pages/TareasPage.jsx';
import CrearTareaPage from './pages/CrearTareaPage.jsx';
import TareaDetallePage from './pages/TareaDetallePage.jsx';
import './App.css';

function App() {
  return (
    <div className="bg-white text-dark-green">
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tareas" element={<TareasPage />} />
          <Route path="/crear" element={<CrearTareaPage />} />
          <Route path="/tarea/:id" element={<TareaDetallePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;