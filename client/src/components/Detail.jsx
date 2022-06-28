import React from 'react'; 
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDetail } from '../redux/actions'


function Detail(props) {
    const country = useSelector((state) => state.detail)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetail(props.match.params.id))
    }, [dispatch, props.match.params.id])

    return (
        <div>
            {country ?
                <div>
                    <h1>{country.name}</h1>
                    <img src={country.imgFlag} alt='Imag no Found' />
                    <h2>Continente: {country.continent}</h2>
                    <h3>Capital: {country.capital}</h3>
                    <h4>Subregion: {country.subregion}</h4>
                    <h5>Area: {country.area}</h5>
                    <h5>Poblacion: {country.population}</h5>
                    <div>{country.Activities?.map(c => {
                        return (
                            <div className='actividad'>
                                <h6>Activity: {c.name} </h6>
                                <h6>Difficulty: {c.difficulty} </h6>
                                <h6>Duration: {c.duration}</h6>
                                <h6>Season: {c.season} </h6>
                            </div>
                        )
                    })}</div>
                </div>
                : <p>No se encuentra detalles del Pais.</p>
            }
            <Link to='/home'>
                <button>Home</button>
            </Link>

        </div>
    )
}

export default Detail