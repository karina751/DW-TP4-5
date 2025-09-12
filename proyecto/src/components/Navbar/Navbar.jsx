import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/tareas">Ver Tareas</Link>
        </li>
        <li>
          <Link to="/crear">Crear Tarea</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;