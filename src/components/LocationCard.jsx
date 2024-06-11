import React from 'react'
import './styles/locationCard.css'

const LocationCard = ({info}) => {

    return (
        <article className='location'>
            <h2 className='location__name'>{info?.name}</h2>
            <ul className='location__list'>
                <li className='location__item'><span>Type: </span><span>{info?.type}</span></li>
                <li className='location__item'><span>Dimension: </span><span>{info?.dimension}</span></li>
                <li className='location__item'><span>Population: </span><span>{info?.residents?.length}</span></li>
            </ul>
        </article>
    )
}

export default LocationCard