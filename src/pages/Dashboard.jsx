import Header from "../componentes/atomos/Header";
import DescripcionGeneral from "../componentes/moleculas/DescripcionGeneral";
import Cuadros from "../componentes/moleculas/Cuadros";
import Tabla from "../componentes/moleculas/Tabla";

function Dashboard() {
    return (
        <div>
            <DescripcionGeneral></DescripcionGeneral>
            <Cuadros></Cuadros>
            <Tabla></Tabla>
        </div>
    );
}

export default Dashboard;