import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TareasPage = () => {
  const [tareas, setTareas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula una llamada a la API
    setTimeout(() => {
      const tareasMock = [
        { id: 1, titulo: 'Aprender React Router' },
        { id: 2, titulo: 'Configurar formulario con react-hook-form' },
        { id: 3, titulo: 'Entender el hook useEffect' },
      ];
      setTareas(tareasMock);
      setLoading(false);
    }, 1000);
  }, []); // El array de dependencias vacío [] asegura que el efecto se ejecute solo una vez al montar el componente

  if (loading) {
    return <div>Cargando tareas...</div>;
  }

  return (
    <div>
      <h1>Lista de Tareas</h1>
      {tareas.length > 0 ? (
        <ul>
          {tareas.map((tarea) => (
            <li key={tarea.id}>
              <Link to={`/tarea/${tarea.id}`}>{tarea.titulo}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay tareas disponibles.</p>
      )}
    </div>
  );
};

export default TareasPage;