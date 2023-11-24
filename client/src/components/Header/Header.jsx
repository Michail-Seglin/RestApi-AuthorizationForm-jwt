import style from './header.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import MyContext from '../../context/MyContext';
import { useContext } from 'react';
function Header() {

    // const { token, logOut } = useAuth();
    const { token, logOut } = useContext(MyContext);
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
        <div className={style.signUpBtn1}>
            <p onClick={logOutUser}>LogOut</p>
        </div>


}

export default Header