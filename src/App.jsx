import { Routes, Route } from "react-router"

//Area publica
import Home from "./views/public/Home"
import Login from "./views/auth/Login"
import Register from "./views/auth/Register"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/signin" element={<Login />} />
        <Route path="/auth/signup" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
