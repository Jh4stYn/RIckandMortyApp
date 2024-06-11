import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import './styles/residentCard.css'

const ResidentCard = ({info}) => {
    const [resident, getResident] = useFetch()

    useEffect(() => {
        getResident(info)
    }, [])

    console.log(resident)
    return (
        <article className='residentcard'>
            <figure className='residentcard__img'>
                <img src={resident?.image} alt="character image" />
                <figcaption className='residentcard__status'>
                    <div className={`residentcard__circle ${resident?.status}`}></div>
                    <span>{resident?.status}</span>
                </figcaption>
            </figure>
            <h2 className='residentcard__name'>{resident?.name}</h2>
            <hr className='residentcard__separator' />
            <ul className='residentcard__list'>
                <li className='residentcard__item'><span>Specie: </span><span>{resident?.species}</span></li>
                <li className='residentcard__item'><span>Origin: </span><span>{resident?.origin.name}</span></li>
                <li className='residentcard__item'><span>Eppisodes where appear: </span><span>{resident?.episode.length}</span></li>
            </ul>
        </article>
    )
}

export default ResidentCard