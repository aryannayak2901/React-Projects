import { Login, Profile } from './components'
import './App.css'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    
    <UserContextProvider>
      <h1>Hello</h1>
      <Login />
      <Profile /> 
    </UserContextProvider>
    
  )
}

export default App
