import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1 className='text-red-900 text-7xl'> welcome here</h1>
        <button className='w-48 bg-blue-600 rounded-3xl p-4 text-white text-2xl hover:bg-red-200 tex-black-200' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
     
    </>
  )
}

export default App
