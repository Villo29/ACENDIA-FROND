import React, { useState, useEffect } from 'react';


function App() {
  const [contador, setContador] = useState(0);

  // Función que incrementa el contador automáticamente cada segundo
  useEffect(() => {
    const intervalId = setInterval(() => {
      setContador((prevContador) => prevContador + 1);
    }, 1000);

    // Limpiar el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      <h1>Contador Automático</h1>
      <p>Total: {contador}</p>
    </div>
  );
}

export default App;