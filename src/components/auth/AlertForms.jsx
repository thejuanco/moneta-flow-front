import React from 'react'

const AlertForms = ({alert}) => {
  return (
    <div>
        <p className="text-sm text-red-700 text-center">{alert.message}</p>
    </div>
  )
}

export default AlertForms