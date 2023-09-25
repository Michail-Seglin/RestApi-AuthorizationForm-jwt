import Cookie from 'js-cookie';
import React, { useEffect, useState } from 'react';



function useAuth() {
    const [token, setToken] = useState()

    useEffect(() => {
        logIn()
    },
        [])

    function logIn() {
        const token = Cookie.get('access_token');
        console.log(token);
        setToken(token)
    }

    function logOut() {
        Cookie.remove('access_token');
        setToken(null)
    }

    return { logIn, logOut, token }

}

export default useAuth