import React from 'react'
import NavBarHome from '../../components/home/NavBarHome'
import { Link } from 'react-router'

const Home = () => {
  return (
    <div>
        <NavBarHome />
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                      Administra tus finanzas con facilidad
                    </h1>
                    <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Moneta-Flow te ayuda a controlar tus gastos, ahorrar dinero y alcanzar tus metas financieras.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row space-x-2">
                    <button>
                      <Link 
                        to="/auth/signup"
                        className="bg-gray-800 text-white py-2 px-6 rounded-lg hover:bg-gray-700 flex items-center"
                      >Comenzar ahora <span className="material-symbols-rounded ml-2">arrow_right_alt</span></Link>
                    </button>
                    <button>
                      <Link 
                        to="/auth/signup"
                        className="py-2 px-6 flex font-semibold items-center rounded-lg border border-gray-300 hover:bg-gray-100"
                      >Ver demo</Link>
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <img
                    className="h-56 w-56 rounded-lg object-cover"
                    src="img/finance-main.svg" 
                    alt="Imagen de inicio"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
    </div>
  )
}

export default Home