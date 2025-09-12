import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="text-center my-5">
      <h1 className="display-4 texto-verde-oscuro">Bienvenido a la Gestión de Tareas</h1>
      <p className="lead texto-verde-oscuro">Aquí podrás gestionar tus tareas de forma sencilla y eficiente.</p>
      <div className="d-flex justify-content-center gap-3 mt-4">
        <Link to="/tareas" className="btn btn-outline-success btn-lg boton-animado">
          Ver Tareas
        </Link>
        <Link to="/crear" className="btn btn-success btn-lg boton-animado">
          Crear Tarea
        </Link>
      </div>
    </div>
  );
};

export default HomePage;