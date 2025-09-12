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
    <div className="my-5 card-custom p-4">
      <h1 className="text-center mb-4 text-dark-green">Crear Nueva Tarea</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="titulo" className="form-label text-dark-green">
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
        <div className="d-grid">
          <button type="submit" className="btn bg-dark-green text-white btn-lg animated-btn">
            Crear Tarea
          </button>
        </div>
      </form>
    </div>
  );
};

export default CrearTareaPage;