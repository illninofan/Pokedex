import React from 'react';
import './styles/PokeCell.css';
import sprites from '../assets/sprites.png';

const PokeCell = ({ pokeClass, handleClick }) => {

    const { id, backgroundPosition } = pokeClass;

    const styles = {
        backgroundImage: `url(${sprites})`,
        backgroundPosition
    };

    return (
        <button style={styles} className='poke-cell' onClick={() => handleClick(id)}>

        </button>
    )
}

export default PokeCell