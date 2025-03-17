import { Routes, Route } from "react-router"

//Area publica
import Home from "./views/public/Home"
import Login from "./views/auth/Login"
import Register from "./views/auth/Register"
import NotFound from "./views/public/NotFound"
import RecoveryPassword from "./views/auth/RecoveryPassword"
import ConfirmationEmail from "./views/auth/ConfirmationEmail"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/auth/signin" element={<Login />} />
        <Route path="/auth/signup" element={<Register />} />
        <Route path="/auth/recovery-password" element={<RecoveryPassword />} />
        <Route path="/auth/confirmation-email" element={<ConfirmationEmail />} />
      </Routes>
    </>
  )
}

export default App
