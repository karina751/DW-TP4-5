import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TareasPage = () => {
  const [tareas, setTareas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const tareasMock = [
        { id: 1, titulo: 'Aprender React Router' },
        { id: 2, titulo: 'Configurar formulario con react-hook-form' },
        { id: 3, titulo: 'Entender el hook useEffect' },
      ];
      setTareas(tareasMock);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center my-5">
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="my-5 card-custom p-4">
      <h1 className="text-center mb-4 text-dark-green">Lista de Tareas</h1>
      {tareas.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-hover table-striped">
            <thead>
              <tr className="bg-dark-green text-white">
                <th scope="col">ID</th>
                <th scope="col">Título de la Tarea</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {tareas.map((tarea) => (
                <tr key={tarea.id} className="text-dark-green">
                  <td>{tarea.id}</td>
                  <td>{tarea.titulo}</td>
                  <td>
                    <Link to={`/tarea/${tarea.id}`} className="btn btn-sm btn-outline-success animated-btn">
                      Ver Detalles
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-dark-green">No hay tareas disponibles.</p>
      )}
    </div>
  );
};

export default TareasPage;