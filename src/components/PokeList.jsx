import React from 'react';
import './styles/PokeList.css';
import PokeCell from './PokeCell';
import { pokeClasses } from './PokeClasses';

const PokeList = ({ handleClick }) => {

    const cells = pokeClasses.map(poke => {
        return (
            <PokeCell 
            key={poke.id}
            pokeClass={poke}
            handleClick={handleClick}
            />
        )
    })


    return (
    <section className='poke-list'>
        {cells}
    </section>
    )
}

export default PokeList