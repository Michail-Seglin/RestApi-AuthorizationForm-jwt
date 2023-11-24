import { Routes, Route } from 'react-router-dom'
import RoutesProvider from './RoutesProvider/RoutesProvider'
import useAuth from './hooks/useAuth'
import MyContext from './context/MyContext'

function App() {
  const data = useAuth()
  console.log(data.token);
  const Route = RoutesProvider(!!data.token)
  return (
    <>
      <MyContext.Provider value={data}>
        {Route}
      </MyContext.Provider>
    </>
  )
}

export default App
