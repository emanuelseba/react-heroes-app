import { useContext } from 'react';
import { Link, NavLink ,useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';


export const Navbar = () => {

    const navigate = useNavigate();

    const {user, dispatch} = useContext(AuthContext);

    const handleLogut = () => {

        dispatch({type: types.logout});

        navigate(process.env.PUBLIC_URL+'/login',{
            replace:true
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link
                className="navbar-brand"
                to={process.env.PUBLIC_URL+"/"}
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                        to={process.env.PUBLIC_URL+"/marvel"}
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                        to={process.env.PUBLIC_URL+"/dc"}
                    >
                        DC
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                        to={process.env.PUBLIC_URL+"/search"}
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-info'>
                        {user.name}
                    </span>
                    <button
                        className="nav-item nav-link btn"
                        onClick={handleLogut}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}