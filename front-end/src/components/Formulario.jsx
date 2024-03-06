export default function Formulario(prop) {
  return (
    <>
      <form className="max-md:col-[2] max-md:row-[2] text-lg flex flex-col items-center mt-6 mx-auto w-[60%] h-[70%]
      border border-slate-600 rounded-xl shadow-slate-500 shadow-md transition-colors duration-300
      dark:text-bunker-200">
        <h1 className="text-slate-600 text-2xl my-5 dark:text-bunker-100">Postulate acá</h1>
        <div className="flex-row">
          <label className="mr-2">Nombre:</label>
          <input
            className="rounded-lg bg-transparent"
            placeholder="ingrese su nombre"
            type="text"
          ></input>
        </div>
        <div className="flex-row my-3">
          <label className="mr-2">Apellido:</label>
          <input
            className="rounded-lg bg-transparent"
            placeholder="Ingrese su apellido"
            type="text"
          ></input>
        </div>
        <div className="flex-row">
          <label className='mr-2'>Profesión:</label>
          <select className="rounded-lg bg-transparent">
            <option>Ingeniero Industrial</option>
            <option>Diseñadora</option>
            <option>Programador Web</option>
            <option>Abogada</option>
            <option>Ingeniero Civil</option>
            <option>Psiquiatra</option>
            <option>Chef Ejecutivo</option>
            <option>Periodismo Digital</option>
          </select>
        </div>
        <div className="flex-row my-3">
          <label className='mr-2'>DNI:</label>
          <input  className="rounded-lg bg-transparent" placeholder="Ingrese su DNI" type="number"></input>
        </div>
        <div className="flex-row">
          <label className='mr-2'>Correo electronico:</label>
          <input  className="rounded-lg bg-transparent"
            placeholder="Ingrese su correo eletronico"
            type="email"
          ></input>
        </div>
        <div className="flex-row my-3">
          <label className='mr-2'>Perfil de LinkedIn:</label>
          <input  className="rounded-lg bg-transparent" placeholder="Ingrese su Perfil de LinkeIn" type="url"></input>
        </div>
        <div className="flex-row">
          <label className='mr-2'>Numero de Telefono:</label>
          <input  className="rounded-lg bg-transparent" placeholder="Ingrese su numero de telefono" type="tel"></input>
        </div>
        <div className="flex-row my-3">
          <label className='mr-2'>Fecha de Nacimiento:</label>
          <input className="rounded-lg bg-transparent  " type="date" name="fechanac"></input>
        </div>
        <div className="flex-row">
          <label className='mr-2'>Genero:</label>
          <select className="rounded-lg bg-transparent" name="genero">
            <option value="">Elige una opción</option>
            <option>Hombre</option>
            <option>Mujer</option>
            <option>Prefiero no decirlo</option>
          </select>
        </div>
      </form>
    </>
  );
}
