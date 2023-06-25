import React from 'react'
import imagen1 from '../imagenes/GodofWar_1.jpg'
import imagen2 from '../imagenes/Call-of-Duty-Infinite.jpg'
import imagen3 from '../imagenes/cute-mario.jpg'
import Card from './Card'
    const cards = [
        {
           id: 1,
           title: 'Goog of War',
           image: imagen1,
           instructor: "Juegos Medievales"

        },
        {
            id: 2,
            title: 'Call Of Duty',
            image: imagen2,
            instructor: "Juegos de Guerra"
 
         },
         {
            id: 3,
            title: 'Super Mario',
            image: imagen3,
            instructor: "Juegos para tu niño"
 
         }, 
    ]

export default function Cards(){
      console.log(cards)
  return(
    <div className='container d-flex justify-content-center aling-item-center h-100'>
        <div className='row'>
        {
        cards.map( c=> (
            <div className='col-md-4' key={cards.id}>
            <Card
            key={c.id}
            id={c.id}
            title={c.title}
            image={c.image}
            instructor={c.instructor}
            />
            </div>
         ))
        }
        </div>
        </div>
  )
}