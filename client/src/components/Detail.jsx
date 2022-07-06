import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDetail } from '../redux/actions'
import './styles/Detail.css'


function Detail(props) {
    const country = useSelector((state) => state.detail)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getDetail(props.match.params.id))
    }, [dispatch, props.match.params.id])

    return (
        <div className='cajaDetail'>
            <div >
                <div className='btn' >
                    <Link to='/home'>
                        <button>Home</button>
                    </Link>
                </div>

                <div>
                    {country ?
                        <div >
                            <div className='containerDetail'>
                                <div >
                                    <h1 className='h1'>{country.name}</h1>
                                    <img className='img' src={country.imgFlag} alt='Imag no Found' width='250' height='250' />
                                </div>
                                <div className='details'>
                                    <h2 className='text'>Continente:   {country.continent}.</h2>
                                    <h3 className='text'>Capital:   {country.capital}.</h3>
                                    <h4 className='text'>Subregion:   {country.subregion}.</h4>
                                    <h5 className='text'>Area:   {country.area} km2.</h5>
                                    <h5 className='text'>Poblacion:   {country.population} habs.</h5>
                                </div>
                            </div>

                            <div className='containerDetail'>
                                {country.Activities?.map(c => {
                                    return (
                                        <div className='actividad'>
                                            <h6>Activity: {c.name} </h6>
                                            <h6>Difficulty: {c.difficulty} </h6>
                                            <h6>Duration: {c.duration}</h6>
                                            <h6>Season: {c.season} </h6>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>
                        : <p>No se encuentra detalles del Pais.</p>
                    }
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Detail