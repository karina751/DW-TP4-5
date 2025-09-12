import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-blanco shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand texto-verde-oscuro fw-bold" to="/">Gestión de Tareas</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="btn btn-outline-success mx-2 boton-animado" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-success mx-2 boton-animado" to="/tareas">Ver Tareas</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-outline-success mx-2 boton-animado" to="/crear">Crear Tarea</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;