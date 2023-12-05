import traerDatos from "./funciones/traerDatos";
import { useState, useEffect } from "react";
import "./hoja-de-estilos/app.css";

function App() {
  const [on, setOn] = useState("false");
  const handleClick = () => {
    {
      setOn(!on);
    }
  };

  const [datos, setDatos] = useState([]);

  useEffect(() => {
    traerDatos(setDatos);
  }, []);

  return (
    <>
      <button className="boton" onClick={handleClick}>
        {on ? "CERRAR" : "RECIBIR DATOS SIMPSONS"}
      </button>
      {on && (
        <div className="carta">
          {datos != null
            ? datos.map((date) => (
                <div key={date.id}>
                  <h1 className="titulo">{date.Nombre}</h1>
                  <br />
                  <div className="contenedor-imagen">
                    <img
                      className="imagen"
                      src={date.Imagen}
                      alt={date.Nombre}
                    />
                  </div>
                  <p className="estado">
                    Género: {date.Genero} - Estado: {date.Estado} - Ocupación:{" "}
                    {date.Ocupacion}
                  </p>
                  <p className="historia">{date.Historia}</p>
                  <br />
                </div>
              ))
            : "Cargando datos..."}
        </div>
      )}
    </>
  );
}

export default App;
