import React from 'react'
import './Main.css'
const Main = () => {
  return (
    <section className='introduccion'>
        <h2 className='tituloI'>Bienvenido al mundo de Los Simpson</h2>
        <p className='descripcion'>
            Explora los personajes más queridos, los lugares emblemáticos de Springfield
            y revive los episodios más icónicos de esta legendaria serie animada.
        </p>
        <div className='containerIMG'>
            <img className='fotoF' src="https://upload.wikimedia.org/wikipedia/en/0/0d/Simpsons_FamilyPicture.png"
            alt="Familia Simpson"></img>
        </div>
    </section>
  )
}

export default Main