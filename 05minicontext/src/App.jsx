import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './components/Profile'
import Login from './components/Login'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>React for Context API</h1>
      <Profile/>
      <Login/>
    </UserContextProvider>
  )
}

export default App
