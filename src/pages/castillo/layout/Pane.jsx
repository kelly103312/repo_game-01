import React from 'react'
import { useLifes } from '../util/ManagementLifes';

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
