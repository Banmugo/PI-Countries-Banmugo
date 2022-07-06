import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllContries, filterContinent, filterActivity, getcantPobl, getOrderAlf, getActivities } from '../redux/actions'
import Cards from './Cards'
import Page from './Page'
import SearchBar from './SearchBar'
import './styles/Home.css'


// cuando filtro por act, no me funciona mas veces


export default function Home() {

  const dispatch = useDispatch();
  const allCountries = useSelector(state => state.allCountries);
  const [currentPage, setCurrentPage] = useState(1)
  const [countriesXPage] = useState(10)
  const indexLastCountry = currentPage * countriesXPage
  const indexFirstCountry = indexLastCountry - countriesXPage
  const currentCountry = allCountries.slice(indexFirstCountry, indexLastCountry)
  const [, setOrder] = useState('')
  const [, setOrderAlf] = useState('')
  const allActivities = useSelector(state => state.activitiesCreated)
  const activityName = allActivities.map(a => a.name);
  // console.log(activityName)

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    dispatch(getAllContries())
  }, [dispatch])
  useEffect(() => {
    dispatch(getActivities())
  }, [dispatch])

  function handleCLickRecharge(e) {
    e.preventDefault()
    dispatch(getAllContries())
    dispatch(getActivities())
    // setCurrentPage(1);
    // setOrder('')
    // setOrderAlf('')
  }

  function handlefilterContinent(e) {
    dispatch(filterContinent(e.target.value))
  }

  function handlefilterActivity(e) {
    dispatch(filterActivity(e.target.value))
  }
  // falto entender algo de este lo del serOrder
  function handlegetcantPobl(e) {
    e.preventDefault();
    dispatch(getcantPobl(e.target.value))
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`)
  }
  function handlegetOrderAlf(e) {
    e.preventDefault(e);
    dispatch(getOrderAlf(e.target.value))
    setCurrentPage(1);
    setOrderAlf(`Ordenado ${e.target.value}`)
  }

  return (
    <div className='cajaHome'>
        <div>
          <h1 className='h1'> COUNTRY INFORMATION</h1>
          </div>
      <div>

        <br />
        <div>
          <div>
            {/*btn para crear actividad  y btn para recargar la pag.*/}
            <SearchBar />
            <div>
              <Link to='/activities'><button className='btnHome'>Crear Actividades</button></Link>
            </div>

            <div>
              <button className='btnHome' onClick={(e) => { handleCLickRecharge(e) }}>Recargar pagina</button>
            </div>
            <br />
            <div>

              {/* btn para filtrar x actividad ---- falta ensayar cuando se pueda crear una actividad*/}
              <label className='labelHome'>Activities: </label>
              {activityName.length === 0 ?
                <p>Crea actividades para filtrarlas</p>
                : <select className='selectHome' onChange={e => handlefilterActivity(e)}>
                  {activityName.map((e) => {
                    return (
                      <option key={e} value={e} > {e} </option>
                    )
                  }
                  )}
                </select>
              }
              {/* btn para filtrar x continet */}
              <label className='labelHome'>Continent: </label>
              <select className='selectHome' onChange={e => handlefilterContinent(e)} >
                <option value="All">All Countries</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Antarctic">Antarctic</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
              </select>


              {/* btn para ordenar AZ y ZA */}
              <label className='labelHome'>Alphabetical Order: </label>
              <select className='selectHome' onChange={e => handlegetOrderAlf(e)}>

                <option value='' >   ---  </option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
              </select>

              {/* btn para ordenar > y < poblacion */}
              <label className='labelHome'>Poblation: </label>
              <select className='selectHome' onChange={e => handlegetcantPobl(e)}>
                <option value='' >     ---      </option>
                <option value='Menor a Mayor'>Menor a Mayor Poblacion</option>
                <option value='Mayor a Menor'>Mayor a Menor Poblacion</option>
              </select>
            </div>
            <br />

            <div>
              <Page
                countriesXPage={countriesXPage}
                allCountries={allCountries.length}
                paginado={paginado}
              />
            </div>

            <div className='Cards'>
              <Cards
                currentCountry={currentCountry} />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}





