import { useParams, useNavigate } from 'react-router-dom';

const TareaDetallePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="text-center my-5 card-custom p-4">
      <h1 className="display-5 mb-4 text-dark-green">Detalles de la Tarea</h1>
      <div className="card mx-auto" style={{ maxWidth: '400px' }}>
        <div className="card-body">
          <h5 className="card-title text-dark-green">Tarea ID: {id}</h5>
          <p className="card-text text-dark-green">Aquí irían más detalles de la tarea con ID {id}.</p>
          <button onClick={() => navigate('/tareas')} className="btn bg-dark-green text-white mt-3 animated-btn">
            Volver a la lista
          </button>
        </div>
      </div>
    </div>
  );
};

export default TareaDetallePage;