import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Bienvenido a la Gestión de Tareas</h1>
      <p>Aquí podrás gestionar tus tareas de forma sencilla y eficiente.</p>
      <p>
        Para empezar, ve a la <Link to="/tareas">lista de tareas</Link> o{' '}
        <Link to="/crear">crea una nueva tarea</Link>.
      </p>
    </div>
  );
};

export default HomePage;