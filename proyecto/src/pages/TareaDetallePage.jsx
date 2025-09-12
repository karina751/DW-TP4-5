import { useParams, useNavigate } from 'react-router-dom';

const TareaDetallePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="text-center my-5 contenedor-tabla p-4">
      <h1 className="display-5 mb-4 texto-verde-oscuro">Detalles de la Tarea</h1>
      <div className="card mx-auto" style={{ maxWidth: '400px' }}>
        <div className="card-body">
          <h5 className="card-title texto-verde-oscuro">Tarea ID: {id}</h5>
          <p className="card-text texto-verde-oscuro">Aquí irían más detalles de la tarea con ID {id}.</p>
          <button onClick={() => navigate('/tareas')} className="btn bg-verde-oscuro texto-blanco mt-3 boton-animado">
            Volver a la lista
          </button>
        </div>
      </div>
    </div>
  );
};

export default TareaDetallePage;