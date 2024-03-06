import React from 'react'

const ControlPresupuesto = ({presupuesto}) => {

    //funcion para formatear el presupuesto a miles
    const formatearPresupuesto = (cantidad) =>{
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <p>Grafico aqui</p>
        </div>

        <div className='contenido-presupuesto'>
            <p>
                <span>Presupuesto: </span> {formatearPresupuesto(presupuesto)}
            </p>

            <p>
                <span>Disponible: </span> {formatearPresupuesto(0)}
            </p>

            <p>
                <span>Gastado: </span> {formatearPresupuesto(0)}
            </p>

        </div>
      
    </div>
  )
}

export default ControlPresupuesto
