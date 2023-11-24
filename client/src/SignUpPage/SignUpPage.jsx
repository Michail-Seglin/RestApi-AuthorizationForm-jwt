import Header from "../components/Header/Header"
import style from '../SignUpPage/signUpPage.module.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

function SignUpPage() {
    const [inpValue, setInpvalue] = useState({ name: '', surname: '', email: '', password: '' });

    function getInpValue(e) {
        setInpvalue({ ...inpValue, [e.target.id]: e.target.value })
    }

    async function send() {
        await axios.post('http://localhost:3001/user', inpValue)
    }

    return (
        <>
            <Header />
            <div className={style.main}>
                <h1>Welcome, let's create an account</h1>
                <p>Create an account to keep track of your customers, and contributors. Once your account has been created then don’t forget to verify your account through mail.</p>

                <div className={style.wrapper}>
                    <input id='name' placeholder='Your name' onChange={getInpValue} ></input>
                    <input id='surname' placeholder='Your surname' onChange={getInpValue}></input>
                </div>

                <div className={style.email}>
                    <input id='email' placeholder='Your email' onChange={getInpValue} />
                </div>

                <div className={style.pwd}>
                    <input id="password" placeholder="Must be at least 8 characters." onChange={getInpValue} />
                </div>
                <div className={style.btn} onClick={send}>Continue</div>
            </div>
        </>
    )
}

export default SignUpPage