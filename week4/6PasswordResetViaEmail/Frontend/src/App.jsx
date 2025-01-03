import { useState } from 'react'
import ResetPassword from './resetPassword';
import ResetPasswordRequest from './resetPasswordRequest';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ResetPassword></ResetPassword>
      <ResetPasswordRequest></ResetPasswordRequest>

    </>
  )
}

export default App
