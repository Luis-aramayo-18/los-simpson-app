import React from 'react'

const Character = ({personajes}) => {
  return (
    <div className='row'>
        {
          personajes.map((item,index)=>(
            <div key={index} className='col'>
                <div className='card'>
                    <img src={item.Imagen} alt={item.Nombre}/>
                    <div className='card-body'>
                        <h3 className='card-title'>{item.Nombre}</h3>
                        <p>{item.Ocupacion}</p>
                    </div>
                </div>
            </div>
          ))
        }
        
    </div>
  )
}

export default Character