import style from './header.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

function Header() {

    const { token, logOut } = useAuth();
    const navigate = useNavigate();

    function logOutUser() {
        logOut();
        navigate('/')
    }


    return !token ? <div className={style.headerNav}>
        <div className={style.signInBtn}>
            <Link to={'/'}>Sign In</Link>
        </div>
        <div className={style.signUpBtn}>
            <Link to={'/signup'}>SignUp</Link>
        </div>
    </div>
        :
        <div className={style.signUpBtn}>
            <p onClick={logOutUser}> LogOut</p>
        </div>


}

export default Header