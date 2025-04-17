import React from 'react'
import { Outlet } from 'react-router'

//Importar componentes
import Sidebard from './components/home/Sidebard'
import NavBar from './components/home/NavBar'

const Dashboard = () => {

  return (
    <>
      <Sidebard/>
      <NavBar/>
      <div className="p-4 sm:ml-64">
        <Outlet/>
      </div>
    </>
  )
}

export default Dashboard