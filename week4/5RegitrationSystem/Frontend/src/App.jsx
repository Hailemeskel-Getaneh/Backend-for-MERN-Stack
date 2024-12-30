import { useState } from 'react'
import LoginPage from './registration'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <h3>Welcome to the Registration page</h3>
        <LoginPage/>
      
    </>
  )
}

export default App
