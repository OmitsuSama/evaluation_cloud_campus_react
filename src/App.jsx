import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Users from './components/Users'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container-app">
        <Users />
      </div>
    </>
  )
}

export default App
