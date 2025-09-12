import { useForm } from 'react-hook-form';

const CrearTareaPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Datos del formulario:', data);
    alert('Tarea creada con éxito. Revisa la consola para ver los datos.');
  };

  return (
    <div className="d-flex justify-content-center my-5"> {/* Centra el contenido horizontalmente */}
      <div className="col-md-6"> {/* Limita el ancho del formulario a la mitad en pantallas medianas y grandes */}
        <h1 className="text-center mb-4 texto-verde-oscuro">Crear Nueva Tarea</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="p-4 bg-light rounded shadow"> {/* Añadimos padding y estilo al formulario */}
          <div className="mb-3">
            <label htmlFor="titulo" className="form-label texto-verde-oscuro">
              Título de la Tarea:
            </label>
            <input
              id="titulo"
              type="text"
              className="form-control"
              {...register('titulo', { required: true })}
            />
            {errors.titulo && (
              <span className="text-danger">Este campo es obligatorio.</span>
            )}
          </div>
          <div className="d-flex justify-content-center mt-4"> {/* Centra el botón */}
            <button type="submit" className="btn btn-success btn-sm boton-animado"> {/* btn-sm lo hace más pequeño */}
              Crear Tarea
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CrearTareaPage;