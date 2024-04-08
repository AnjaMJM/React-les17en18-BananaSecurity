import {useContext} from 'react';
import logo from '../../assets/banana-01.png';
import {useNavigate, Link} from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext";

function NavBar() {
    const navigate = useNavigate();
    const {login, logout, auth} = useContext(AuthContext)



    return (
        <nav>
            <Link to="/">
              <span className="logo-container">
                <img src={logo} alt="logo"/>
                <h3>
                  Banana Security
                </h3>
              </span>
            </Link>

            <div>
                {auth.isAuth && auth.email !== "" && <p>{auth.email}</p>}
                {!auth.isAuth && <button
                    type="button"
                    onClick={() => navigate('/signin')}
                >
                    Log in
                </button>}
                {auth.isAuth && <button
                    type="button"
                    onClick={logout}
                >
                    Log uit
                </button>}
                <button
                    type="button"
                    onClick={() => navigate('/signup')}
                >
                    Registreren
                </button>
            </div>
        </nav>
    );
}

export default NavBar;