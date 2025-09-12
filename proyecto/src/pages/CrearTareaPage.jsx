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
    <div>
      <h1>Crear Nueva Tarea</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="titulo">Título de la Tarea:</label>
          <input
            id="titulo"
            type="text"
            {...register('titulo', { required: true })}
          />
          {errors.titulo && (
            <span style={{ color: 'red' }}>Este campo es obligatorio.</span>
          )}
        </div>
        <button type="submit">Crear Tarea</button>
      </form>
    </div>
  );
};

export default CrearTareaPage;