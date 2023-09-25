import { Routes, Route } from 'react-router-dom'
import RoutesProvider from './RoutesProvider/RoutesProvider'
import useAuth from './hooks/useAuth'

function App() {
  const { token } = useAuth()
  console.log(token);
  const Route = RoutesProvider(!!token)
  return (
    <>
      {Route}
    </>
  )
}

export default App
