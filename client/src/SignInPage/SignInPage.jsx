import Header from "../components/Header/Header"
import style from './signInPage.module.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from "axios"

function SignInPage() {
    const [inpValue, setInpvalue] = useState({ email: '', password: '' });

    function getInpValue(e) {
        setInpvalue({ ...inpValue, [e.target.id]: e.target.value })
    }

    async function send() {
        const res = await axios.post('http://localhost:3001/user/auth', inpValue)
        console.log(res);
    }
    return (
        <>
            <Header />
            <div className={style.main}>
                <h1>Sign In</h1>
                <p>Log in to access your account or create one. Verify your email for seamless access.</p>

                <div className={style.email}>
                    <input id='email' placeholder='Your email' onChange={getInpValue} />
                </div>

                <div className={style.pwd}>
                    <input id='password' placeholder="Must be at least 8 characters." onChange={getInpValue} />
                </div>
                <div className={style.btn} onClick={send}>Continue</div>
            </div>
        </>
    )
}

export default SignInPage