import '../../assets/styles/TablaStyle.css'
import React, { useState, useEffect } from "react";

function Tabla() {
    const [movimiento, setMovimiento] = useState([]);
    const [fechaActual, setFechaActual] = useState(new Date());

    useEffect(() => {
      fetch("http://52.7.92.9:3000/movimiento")
        .then((response) => response.json())
        .then((data) => setMovimiento(data))
        
        .catch((error) => console.error("Error fetching data:", error));


        const interval = setInterval(() => {
          setFechaActual(new Date());
        }, 1000);
    
        return () => clearInterval(interval);
    }, []);

    return (
      <div className="contenedor-rectangulo">
        <div className="tabla">
          <table>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Personas</th>
                <th>Contador</th>
              </tr>
            </thead>
            <tbody>
              {movimiento.map((mov) => (
                <tr key={mov.hubMax}>
                  <td id='fecha'>{fechaActual.toLocaleDateString()}</td>
                  <td>{mov.Personas}</td>
                  <td>{mov.Contador}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
}

export default Tabla;