import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllContries, postActivity } from '../redux/actions';




// validation = () => {
//   if (a){}
// }

function CreateActivity() {
  const [input, setInput] = useState({
    name: '',
    dificult: '',
    duration: '',
    season: '',
    countries: []
  });

  // const [error, setError] = useState('');
  const dispatch = useDispatch();
  const countries = useSelector(state => state.allCountries);
  console.log(countries)

  useEffect(() => {
    dispatch(getAllContries())
  }, [dispatch])


  return (
    <div>
      <div><Link to='/home'>
        <button>Volver al Home ...</button>
      </Link>
      </div>

      <h2>Create an Activity</h2>
      <div>
        <form >
          <div>
            <label>Activity Name:</label>
            <input type="text" name='name' placeholder='Ej: Surf' value={input.name} />
          </div>
          <br />
          <div>
            <label>Dificult:
              <select >
              <option value={""}>Elija una dificult</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </select>
            </label>

          </div>
          <br />
          <div>
            <label >Duration:</label>
            <input type="text" name='duration' placeholder='Ej: 1 hr' value={input.duration} />
          </div>
          <br />
          <div>
            <label>Season:</label>
            <select>
              <option value={""}>Elija una temporada</option>
              <option value='invierno'>Invierno</option>
              <option value='otoño'>Otoño</option>
              <option value='primavera'>Primavera</option>
              <option value='todo'>Todo el año</option>
            </select>


          </div>
          <br />
          <div>
            <label>Countries:
              <select >{
                countries.map(c => (
                  <option value={c.name}></option>
                ))}
              </select>
            </label>
          </div>
          <br />

          <input type="submit" />

        </form>
      </div>

    </div>
  )
}

export default CreateActivity


