import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllContries, filterContinent, filterActivity, getcantPobl, getOrderAlf } from '../redux/actions'
import Cards from './Cards'
import Page from './Page'



export default function Home() {

  const dispatch = useDispatch();
  const allCountries = useSelector(state => state.allCountries);
  const [currentPage, setCurrentPage] = useState(1)
  const [countriesXPage, setcountriesXPage] = useState(10)
  const indexLastCountry = currentPage * countriesXPage
  const indexFirstCountry = indexLastCountry - countriesXPage
  const currentCountry = allCountries.slice(indexFirstCountry, indexLastCountry)
  // const nombreActividad = useSelector((state)=> state.activities)             filtro de actividades
  // const prueba = nombreActividad.map((e)=> e.name)                            filtro de actividades
  /* Creación de un array de valores únicos a partir del array `prueba`. */
  // const unicos = [... new Set(prueba)];               filtro de actividades
  const [order, setOrder] = useState('')  // cambiar nombres
  const [, setAZ] = useState('')       // cambiar nombres

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    dispatch(getAllContries())
  }, [dispatch])

  function handleCLickRecharge(e) {
    e.preventDefault()
    dispatch(getAllContries())
  }

  function handlefilterContinent (e){
    dispatch(filterContinent(e.target.value))
  }

  // function handlefilterActivity(e){            filtro de actividades
  //   dispatch(filterActivity(e.target.value))
  // }
  // console.log(unicos)

  // falto entender algo de este 
  function handlegetcantPobl(e){
    e.preventDefault();
    dispatch(getcantPobl(e.target.value))
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`)
  }

  function handlegetOrderAlf(e){
    e.preventDefault(e);
    dispatch(getOrderAlf(e.target.value))
    setAZ(`Ordenado ${e.target.value}`)
  }

  return (
    <div>
      {/*btn para crear actividad  y btn para recargar la pag.*/}
      <div className='searchbar'>
        <Link to='/activities'><button>Crear Actividades</button></Link>
        <button onClick={(e) => { handleCLickRecharge(e) }}>Recargar pagina</button>
      </div>
      <div>

      </div>
      {/* btn para filtrar x continet */}
      <label>Continent: </label>
      <select onChange={e => handlefilterContinent(e) } >
        <option selected={true} disabled="disabled">  --- </option>
        <option value="All">All Countries</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Antarctic">Antarctic</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>      

      {/* btn para filtrar x actividad ---- falta ensayar cuando se pueda crear una actividad*/}
      {/* {unicos.length === 0 ?
        <p>Crea actividades para filtrarlas</p>
        : <select  onChange={e => handlefilterActivity(e)}>
          {unicos.map((e) => (
            <option value={e} > {e} </option>
          ))}
        </select>
      } */}

      {/* btn para ordenar AZ y ZA */}
      <label >Organize: </label>
      <select onChange ={e => handlegetOrderAlf(e)}>
        <option selected={true} disabled="disabled">     ---      </option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>

      {/* btn para ordenar > y < poblacion */}
      <label >Poblation: </label>
      <select onChange ={e => handlegetcantPobl(e)}>
        <option selected={true} disabled="disabled">     ---      </option>
        <option value='Mayor a Menor'>Mayor a Menor Poblacion</option>
        <option value='Menor a Mayor'>Menor a Mayor Poblacion</option>
      </select>

      <Page
        countriesXPage={countriesXPage}
        allCountries={allCountries.length}
        paginado={paginado}
      />

      <Cards
        currentCountry={currentCountry} />

    </div>
  )
}





