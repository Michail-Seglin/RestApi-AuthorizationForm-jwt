import React from "react"
import { Route, Routes } from "react-router-dom"
import SignInPage from "../SignInPage/SignInPage"
import SignUpPage from "../SignUpPage/SignUpPage"
import HomePage from "../HomePage/HomePage"

const RoutesProvider = (isAuth) => {
    if (isAuth) {
        return <Routes>
            <Route path='/home' element={<HomePage />}></Route>
        </Routes>
    } else {
        return <Routes>
            <Route path='/' element={<SignInPage />}></Route>
            <Route path='/signup' element={<SignUpPage />}></Route>
        </Routes>
    }
}

export default RoutesProvider