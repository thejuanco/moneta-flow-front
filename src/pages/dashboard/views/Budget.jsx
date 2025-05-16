import React from 'react'

const Budget = () => {
  return (
    <>
      <div>
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold">Presupuestos</h1>
          <button className="bg-green-700 text-gray-100 px-3 py-2 rounded-lg mt-2 hover:bg-green-600">            
            Crear Nuevo Presupuesto
          </button>
        </div>
      </div>
    </>
  )
}

export default Budget