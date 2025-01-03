import { useState } from 'react'
import RegistrationForm from './register'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1 className='text-red-900 text-7xl'> welcome here</h1>
      <RegistrationForm></RegistrationForm>
     
    </>
  )
}

export default App
