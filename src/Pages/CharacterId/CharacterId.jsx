import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function CharacterId (){

    const { id } = useParams();
    const [character, setCharacter] = useState(null);


    useEffect( () =>{
        fetch(`https://thesimpsonsapi.com/api/characters/${id}`)
        .then(res => res.json())
        .then(data => setCharacter(data));
    },[id])

    return (
        <>
            {
                character ? (
                    <div>
                        <h1>{character.name}</h1>
                        <img src={`https://cdn.thesimpsonsapi.com/500${character.portrait_path}`} alt="none" />
                    </div>
                ):(
                    <p> Cargando info... </p>
                )
            }
        </>
    )
}

export default CharacterId