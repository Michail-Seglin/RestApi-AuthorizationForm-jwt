import { Routes, Route } from 'react-router-dom'
import HomePage from './HomePage/HomePage'
import SignInPage from './SignInPage/SignInPage'
import SignUpPage from './SignUpPage/SignUpPage'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<SignInPage />}></Route>
        <Route path='/home' element={<HomePage />}></Route>
        <Route path='/signup' element={<SignUpPage />}></Route>
      </Routes>
    </>
  )
}

export default App
