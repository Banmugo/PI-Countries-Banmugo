import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllContries, postActivity } from '../redux/actions';
import './styles/CreateActivity.css'

function validation(input) {
  let errors = {}
  if (!input.name) {
    errors.name = 'debes ingresar una actividad'
  } else if (input.name.length < 3) {
    errors.name = 'nombre minimo de 3 caracteres'
  }
  if (!input.difficulty) {
    errors.difficulty = 'Selecciona una dificultad'
  }
  if (!input.duration) {
    errors.duration = 'debes ingresar una duracion de la actividad Ej: 1 hr '
  } else if (input.duration < 3) {
    errors.duration = 'duracion minima de 3 caracteres Ej: 1 hr'
  }
  if (!input.season) {
    errors.season = 'Selecciona una Temporada'
  }
  if (input.countries.length === 0) {
    errors.countries = 'Debes asignar almenos un Pais a la Actividad'
  }
  return errors;
}


export default function CreateActivity() {

  const dispatch = useDispatch();
  const countries = useSelector(state => state.allCountries)
  const history = useHistory()
  const [errors, setErrors] = useState({})


  const [input, setInput] = useState({
    name: '',
    difficulty: '',
    duration: '',
    season: '',
    countries: []
  });


  useEffect(() => {
    dispatch(getAllContries())
    setErrors(validation(input))
  }, [dispatch, input])

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    setErrors(validation({
      ...input,
      [e.target.name]: e.target.value
    }))
  }

  function handleSelectDificult(e) {
    setInput({
      ...input,
      difficulty: e.target.value
    })
  }

  function handleSelectSeason(e) {
    setInput({
      ...input,
      season: e.target.value
    })
  }

  function handleSelectCountries(e) {
    if(input.countries.includes(e.target.value)){
      return 
    } else {
      setInput({
        ...input,
        countries: [...input.countries, e.target.value]
      })
    }
  }

  function handleDelete(e) {
    setInput({
      ...input,
      countries: input.countries.filter(c => c !== e)
    })
  }

  function handleSubmitBtn(e) {
    e.preventDefault()
    setErrors(validation(input))
    if (Object.keys(errors).length === 0) {
      dispatch(postActivity(input))
      alert('Actividad Creada con exito. !!!!')
      setInput({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: []
      })
      history.push('/home')
    } else {
      alert('Faltan datos para completar la acividad.')
    }
  }


  return (
    <div className='cajaCreate'>
      <div>
        <div><Link to='/home'>
          <button>Volver al Home ...</button>
        </Link>
        </div>
        <h2 className='h2'>Create an Activity</h2>

        <div>

          <form className='form' onSubmit={e => handleSubmitBtn(e)} >
            <div>
              <label className='labelForm'>Activity Name: </label>
              <input className='input' type="text" placeholder='Ej: Surf' name='name' value={input.name} onChange={e => handleChange(e)} />
              {errors.name && (<p className="danger">{errors.name}</p>)}

            </div>
            <br />
            <div>
              <label className='labelForm'>Elija una dificult: </label>
              <select className='selectForm' onChange={e => handleSelectDificult(e)}>
                <option value={""}>Elija una difficulty</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </select>
              {errors.difficulty && (<p className="danger">{errors.difficulty}</p>)}


            </div>

            <div>
              <label className='labelForm'>Duration: </label>
              <input className='input' type="text" name='duration' placeholder='Ej: 1 hr' value={input.duration} onChange={e => handleChange(e)} />
              {errors.duration && (<p className="danger">{errors.duration}</p>)}

            </div>

            <div>
              <label className='labelForm' >Season: </label>
              <select className='selectForm' onChange={e => handleSelectSeason(e)}>
                <option value={""}>Elija una temporada</option>
                <option value="Primavera">Primavera</option>
                <option value="Verano">Verano</option>
                <option value="Otoño">Otoño</option>
                <option value="Invierno">Invierno</option>
              </select>
              {errors.season && (<p className="danger">{errors.season}</p>)}

            </div>

            <div>
              <label className='labelForm'>Countries:  </label>
              <select className='selectForm' onChange={e => handleSelectCountries(e)}>
                {countries.map(c => {
                  return (
                    <option key={c.id} value={c.name}>{c.name}</option>)
                }
                )
                }
              </select>
              {errors.countries && (<p className="danger">{errors.countries}</p>)}
            </div>
            <br />

            <input className='btnForm' type="submit" value='Send...'
              disabled={
                errors.name ||
                  errors.difficulty ||
                  errors.duration ||
                  errors.season ||
                  errors.countries ? true : false
              } />

          </form>
          <div className='Countries'>
        <div className='posbtn'>
            {input.countries.map(c => { 
                          
                return (
                  <div className='Contries' key={c} >                  
                      <div>
                      <p >{c}</p>
                      <button className='botnX' onClick={() => handleDelete(c)} >x</button>
                      </div>                  
                  </div>
                )
            }
            )}
          </div>
        </div>
        </div>
      </div>
    </div>
  )

}