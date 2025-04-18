import { Routes, Route } from "react-router"

//Area publica
import Home from "./views/public/Home"
import Login from "./views/auth/Login"
import Register from "./views/auth/Register"
import NotFound from "./views/public/NotFound"
import RecoveryPassword from "./views/auth/RecoveryPassword"
import ConfirmationEmail from "./views/auth/ConfirmationEmail"
import ConfirmAccount from "./views/auth/ConfirmAccount"

//Rutas privadas
import PrivateRoute from "./views/dashboard/components/auth/PrivateRoute"
import Dashboard from "./views/dashboard/Dashboard"
import Dash from "./views/dashboard/views/Dash"
import Counts from "./views/dashboard/views/Counts"
import Budget from "./views/dashboard/views/Budget"
import Profile from "./views/dashboard/views/Profile"

//Autenticacion
import { useAuth } from "./context/AuthProvider"

function App() {
  const { isAuthenticated, loading } = useAuth()

  if (loading) {
    return <div>
      <h1 className="text-2xl font-bold text-center pt-4">Cargando...</h1>
      <p className="text-center mt-4">Por favor espera...</p>
    </div>
  }

  return (
    <>
      <Routes>
        {isAuthenticated ? (
          <>
            <Route path="/" element={<Home />} />
            <Route  path="/dashboard/" element={<Dashboard />} >
              <Route index element={<Dash/>} />
              <Route path="counts" element={<Counts />} />
              <Route path="budget" element={<Budget />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </>
          ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/auth/signin" element={<Login />} />
            <Route path="/auth/signup" element={<Register />} />
            <Route path="/auth/recovery-password" element={<RecoveryPassword />} />
            <Route path="/auth/confirmation-email" element={<ConfirmationEmail />} />
            <Route path="/auth/confirm-account/:id" element={<ConfirmAccount/>} />
          </>
        )}
      </Routes>
    </>
  )
}

export default App
