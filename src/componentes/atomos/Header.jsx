import '../../assets/styles/HeaderStyle.css'
import Logout from '../../assets/images/logout.png'

function Header() {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <span className="navbar-text">Descripción general</span>
                <span className="navbar-text">Visitantes</span>
                <span className="navbar-text">Horario de mayor flujo</span>
                <span className="navbar-text">Historial</span>
            </div>
            <div className="navbar-right">
                <button className="navbar-button">
                    <img src={Logout} className="salir" />
                </button>
            </div>
        </div>

    );
}

export default Header;