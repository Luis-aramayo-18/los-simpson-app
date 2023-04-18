import React from 'react'

const Character = ({personajes}) => {
  return (
    <div className='row'>
        {
          personajes.map((item,index)=>(
            <div key={index} className='col mb-2'>
                <div className='card'>
                    <img src={item.image} alt={item.name} style={{}}/>
                    <div className='card-body'>
                        <h3 className='card-title'>{item.name}</h3>
                        <p>Especie: {item.species}</p>
                        <p>Localizacion: {item.location.name}</p>
                    </div>
                </div>
            </div>
          ))
        }
        
    </div>
  )
}

export default Character