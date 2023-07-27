import React, { useState, useEffect } from "react";

function DescripcionGeneral() {
    const [fechaHoraActual, setFechaHoraActual] = useState("");

    useEffect(() => {
        const obtenerFechaHoraActual = () => {
            const today = new Date();
            const dia = String(today.getDate()).padStart(2, "0");
            const mes = String(today.getMonth() + 1).padStart(2, "0");
            const año = today.getFullYear();
            const horas = String(today.getHours()).padStart(2, "0");
            const minutos = String(today.getMinutes()).padStart(2, "0");
            const segundos = String(today.getSeconds()).padStart(2, "0");
            return `${dia}/${mes}/${año} ${horas}:${minutos}:${segundos}`;
        };

        const actualizarFechaHora = () => {
            setFechaHoraActual(obtenerFechaHoraActual());
        };

        const intervalId = setInterval(actualizarFechaHora, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="rectangle-container">
            <div className="rectangle">
                <span className="left-text">DESCRIPCIÓN GENERAL</span>
                <span className="right-text">PERÍODO DE RESUMEN {fechaHoraActual}</span>
            </div>
        </div>
    );
}

export default DescripcionGeneral;
