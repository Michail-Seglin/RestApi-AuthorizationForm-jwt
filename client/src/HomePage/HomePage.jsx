import React from "react";
import Header from '../components/Header/Header.jsx'

function HomePage() {
    return (
        <>
            <Header></Header>
            <div className={style.way}></div>
            <h1>Woohoo!</h1>
            <p>You have successfully logged into the system, and a token has been assigned to you. To log out, please click on 'Sign Out'.</p>
        </>
    )
}

export default HomePage