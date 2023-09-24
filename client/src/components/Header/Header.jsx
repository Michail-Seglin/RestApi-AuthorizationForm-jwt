import style from './header.module.scss'
import { Link } from 'react-router-dom'
function Header() {
    return (

        <div className={style.headerNav}>
            <div className={style.signInBtn}>
                <Link to={'/'}>Sign In</Link>
            </div>
            <div className={style.signUpBtn}>
                <Link to={'/signup'}>SignUp</Link>
            </div>

        </div>
    )
}

export default Header