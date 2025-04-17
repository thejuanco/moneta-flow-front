import React, { useEffect } from 'react'
import useAxios from '../../api/api.axios'

const Dashboard = () => {
  const instanceAPI = useAxios()

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-center pt-4">Dashboard</h1>
        <p className="text-center mt-4">Bienvenido al Dashboard</p>
      </div>
    </>
  )
}

export default Dashboard