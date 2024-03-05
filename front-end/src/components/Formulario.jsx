
export default function Formulario(prop) {
    return (
      <>
        <form>
          <h1>Postulate acá</h1>
            <label>Nombre</label>
              <input placeholder = 'ingrese su nombre' type = 'text'></input>
            <label>Apellido</label>
              <input placeholder="Ingrese su apellido" type="text"></input>

            <label>Profesión</label>
              <select>
                <option>Ingeniero Industrial</option>
                <option>Diseñadora</option>
                <option>Programador Web</option>
                <option>Abogada</option>
                <option>Ingeniero Civil</option>
                <option>Psiquiatra</option>
                <option>Chef Ejecutivo</option>
                <option>Periodismo Digital</option>
              </select>

            <label>DNI</label>
              <input placeholder='Ingrese su DNI' type="number"></input>
            <label>Correo electronico</label>
              <input placeholder="Ingrese su correo eletronico" type="email"></input>
            <label>Perfil de LinkedIn</label>
              <input placeholder="Ingrese su Perfil de LinkeIn" type="url"></input>
            <label>Numero de Telefono</label>
              <input placeholder="Ingrese su numero de telefono"  type="tel"></input>
            <label>Fecha de Nacimiento:</label>
              <input type="date" name="fechanac"></input>
            <label>Genero</label>
              <select name="genero">
                <option value="">Elige una opción</option>
                <option>Hombre</option>
                <option>Mujer</option>
                <option>Prefiero no decirlo</option>
              </select>
          
        </form>
      </>
    );
  }


