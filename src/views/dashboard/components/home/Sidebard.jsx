import React from 'react'
import { Link } from 'react-router'

const Sidebard = () => {
  return (
    <>
        <div className='flex flex-col flex-auto flex-shrink-0 bg-gray-50 text-gray-800'>
            <div className='fixed flex flex-col top-0 left-0 w-64 bg-gray-100 h-full'>
                <div className='overflow-y-auto overflow-x-hidden flex-grow'>
                    <ul className='flex flex-col py-4 space-y-1'>
                        <li className='px-5'>
                            <div className='flex flex-row items-center h-8 mb-2'>
                                <span class="material-symbols-outlined">
                                    attach_money
                                </span>
                                <p className='text-xl font-semibold tracking-wide text-green-700'>Moneta-Flow</p>
                            </div>
                        </li>
                        <li>
                            <Link to='/dashboard' class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-green-600 pr-6">
                                <span class="inline-flex justify-center items-center ml-4">
                                    <span class="material-symbols-rounded">
                                        home
                                    </span>
                                </span>
                                <span class="ml-2 text-sm tracking-wide truncate">Inicio</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/counts" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-green-600 pr-6">
                                <span className="inline-flex justify-center items-center ml-4">
                                    <span className="material-symbols-rounded">
                                        task
                                    </span>
                                </span>
                                <span class="ml-2 text-sm tracking-wide truncate">Cuentas</span>
                            </Link>
                        </li>
                        <li>
                        <Link to='/dashboard/budget' class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-green-600 pr-6">
                            <span class="inline-flex justify-center items-center ml-4">
                                <span class="material-symbols-rounded">
                                    workspaces
                                    </span>
                                </span>
                            <span class="ml-2 text-sm tracking-wide truncate">Presupuestos</span>
                            <span class="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-indigo-50 rounded-full">New</span>
                        </Link>
                        </li>
                        <li class="px-6">
                            <div class="flex flex-row items-center h-8">
                                <div class="text-sm font-light tracking-wide text-gray-500">Configuración</div>
                            </div>
                        </li>
                        <li>
                            <Link to="/demo/profile" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-green-600 pr-6">
                                <span class="inline-flex justify-center items-center ml-4">
                                    <span class="material-symbols-rounded">
                                        person
                                    </span>
                                </span>
                                <span class="ml-2 text-sm tracking-wide truncate">Perfil</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/demo/settings" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-green-600 pr-6">
                                <span class="inline-flex justify-center items-center ml-4">
                                    <span class="material-symbols-rounded">
                                        settings
                                    </span>
                                </span>
                                <span class="ml-2 text-sm tracking-wide truncate">Configuración</span>
                            </Link>
                        </li>
                        {/* <li>
                            <Link to="/" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                <span class="inline-flex justify-center items-center ml-4">
                                    <span class="material-symbols-rounded">
                                        logout
                                    </span>
                                </span>
                                <span class="ml-2 text-sm tracking-wide truncate">Cerrar sesión</span>
                            </Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Sidebard