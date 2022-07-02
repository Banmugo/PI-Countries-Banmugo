import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllContries, postActivity } from '../redux/actions';


function validation(input) {
  let err = {}
  if (!input.name) {
    err.name = 'pone un puto nombre...'
  } else if (!input.dificult) {
    err.dificult = 'y la puta dificult que adivino o que ?'
  } else if (!input.duration) {
    err.duration = 'y la puta dificult que adivino o que ?'
  } else if (input.countries.length === 0) {
    err.countries = 'Agrega almenos 1 pais para la actividad a crear!'
  } else {

    return err;
  }
}

export default function CreateActivity() {

  const dispatch = useDispatch();
  const countries = useSelector(state => state.allCountries)
  const history = useHistory()
  const [err, setErr] = useState({})


  const [input, setInput] = useState({
    name: '',
    dificult: '',
    duration: '',
    season: '',
    countries: []
  });



  useEffect(() => {
    dispatch(getAllContries())
  }, [dispatch])  //[dispatch]

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    setErr(validation({
      ...input,
      [e.target.name]: e.target.value      
    }))
  }

  // function handleCheck(e) {
  //   setInput({
  //     ...input,
  //     dificult: e.target.value
  //   })
  // }

  function handleSelectDificult(e) {
    setInput({
      ...input,
      dificult: e.target.value
    })
  }

  function handleSelectSeason(e) {
    setInput({
      ...input,
      season: e.target.value
    })
  }

  function handleSelectCountries(e) {
    setInput({
      ...input,
      countries: [...input.countries, e.target.value]
    })
  }
  // organizar el boton de borrado, xk ctualiza toda la pag
  function handleDelete(e) {
    setInput({
      ...input,
      countries: input.countries.filter(c => c !== e)
    })
  }

  function handleSubmitBtn(e) {
    e.preventDefault()
    dispatch(postActivity(input))
    alert('Actividad Creada con exito. !!!!')
    setInput({
      name: '',
      dificult: '',
      duration: '',
      season: '',
      countries: []
    })
    history.push('/home')
  }


  return (
    <div>
      <div><Link to='/home'>
        <button>Volver al Home ...</button>
      </Link>
      </div>

      <h2>Create an Activity</h2>

      <form onSubmit={e => handleSubmitBtn(e)}>
        <div>
          <label>Activity Name:    
          <input type="text" placeholder='Ej: Surf' name='name' value={input.name} onChange={e => handleChange(e)} />
          {err && ( <p>{err.name}</p> )}
          </label>
        </div>
        <br />
        <div>
          <label>Elija una dificult:
            {/* <label >  1<input type="checkbox" name='1' value='1' onChange={e => handleCheck(e)} /></label>
            <label >  2<input type="checkbox" name='2' value='2' onChange={e => handleCheck(e)} /></label>
            <label >  3<input type="checkbox" name='3' value='3' onChange={e => handleCheck(e)} /></label>
            <label >  4<input type="checkbox" name='4' value='4' onChange={e => handleCheck(e)} /></label>
            <label >  5<input type="checkbox" name='5' value='5' onChange={e => handleCheck(e)} /></label> */}

            <select onChange={e => handleSelectDificult(e)}>
              <option value={""}>Elija una dificult</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
            {err && ( <p>{err.dificult}</p> )}
          </label>

        </div>
        <br />
        <div>
          <label >Duration:   
          <input type="text" name='duration' placeholder='Ej: 1 hr' value={input.duration} onChange={e => handleChange(e)} />
          {err && ( <p>{err.duration}</p> )}
          </label>
        </div>
        <br />
        <div>
          <label>Season:   
          <select onChange={e => handleSelectSeason(e)}>
            <option value={""}>Elija una temporada</option>
            <option value='Primavera'>Primavera</option>
            <option value='Verano'>Verano</option>
            <option value='Otoño'>Otoño</option>
            <option value='Invierno'>Invierno</option>
            {/* <option value='todo'>Todo el año</option> */}
          </select>
          </label>
        </div>
        <br />
        <div>
          <label>Countries:
            <select onChange={e => handleSelectCountries(e)}>{
              countries.map(c => (
                <option key={c.id} value={c.name}>{c.name}</option>
              ))}
            </select>
            {err && ( <p>{err.countries}</p> )}
          </label>

          <ul><li>
          {input.countries.map(c => (
            <div key={c.id}> {c}
              {/* <button onClick={() => handleDelete(c)} >X</button> */}
            </div>
          ))}
          </li>
          </ul>
          </div>
        <br />

        <input type="submit" />

      </form>
    </div>
  )
}