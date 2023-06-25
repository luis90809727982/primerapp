import React from 'react'
//import imagen1 from '../assets/java-logo-yespark.png'
export default function Card({id, title, image, instructor}) {
  return (
    <div className='card text-center bg-dark'>
        <div className='card-body text-light'>
        <img src={image} alt='java-logo-yespark'/> 
         <h4 className='card-title'>{title}</h4>
         <p className='card-text text-seconday'>
            Instructor: {instructor}
        </p> 
        
        <a href='#!'className='btn btn-outline-secondary rounded-0'> 
        Ir al sitio web
        </a>
        </div>

    </div>
  )
}
