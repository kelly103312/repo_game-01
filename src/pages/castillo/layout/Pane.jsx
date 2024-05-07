import React from 'react'
import { useLifes } from '../Context/ManagementLifes';

export const Pane = () => {
  const { lifes, restarLifes } = useLifes();

  var object = '';
  for (let i = 0; i < lifes; i++) {
    object+= ' ❤ '    
  }  

  return (
    <div className='container'>
        {object}
    </div>
  )
}
