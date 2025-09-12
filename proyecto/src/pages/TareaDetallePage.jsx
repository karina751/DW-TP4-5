import { useParams } from 'react-router-dom';

const TareaDetallePage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Detalles de la Tarea</h1>
      <p>Detalles de la Tarea ID: <strong>{id}</strong></p>
    </div>
  );
};

export default TareaDetallePage;