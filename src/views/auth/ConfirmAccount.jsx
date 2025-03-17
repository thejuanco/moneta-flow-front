import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import clientAxios from "../../api/api.axios";
import AlertForms from "../../components/auth/AlertForms";

const ConfirmAccount = () => {
  const [confirmAccount, setConfirmAccount] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({});
  const [message, setMessage] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const confirmAccount = async () => {
        try {
            const url = "/auth/confirm-account/" + id
            const response = await clientAxios.get(url)
            setMessage(response.data.message)
            setConfirmAccount(true)
        } catch (error) {
            setAlert({message: error.response.data.message})
        }
    }
    confirmAccount()
  }, [])

  return (
    <>
      <div className="flex flex-col items-center justify-center pt-20">
        <Link
          to="/"
          className="absolute left-6 top-6 flex items-center gap-2 text-lg font-semibold text-primary md:left-12 md:top-12"
        >
          <span>Moneta-Flow</span>
        </Link>
        <div className="w-full max-w-md border border-gray-100 p-6 rounded-xl shadow">
          <h1 className="text-black text-center font-bold text-2xl pt-8">
            Confirmación de cuenta
          </h1>
          <p className="text-gray-500 text-center mx-8 mt-2">
            {message}
          </p>
          <AlertForms alert={alert} />
          {confirmAccount ? (
            <Link to="/auth/signin">
            <button className="border border-gray-200 p-2 rounded-lg mt-8 w-full font-semibold hover:bg-gray-100 hover:cursor-pointer">
                Inicar Sesión
            </button>
          </Link>
          ) : (
            <Link to="/auth/signup">
                <button className="border border-gray-200 p-2 rounded-lg mt-8 w-full font-semibold hover:bg-gray-100 hover:cursor-pointer">
                    Volver a incio
                </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default ConfirmAccount;
