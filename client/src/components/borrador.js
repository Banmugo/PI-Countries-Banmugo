

// ------- reciclar jajajaj Home -------
{/*  
 {/* barra de busqueda  */}
<div>
  <SearchBar />
</div>

{/* btn para filtrar x continet */ }
<div >
  <label>Continent: </label>
  <select>
    <option selected={true} disabled="disabled">
      ---
    </option>
    <option value="All">All Countries</option>
    <option value="Europe">Europe</option>
    <option value="Oceania">Oceania</option>
    <option value="Americas">Americas</option>
    <option value="Africa">Africa</option>
    <option value="Asia">Asia</option>
    <option value="Antarctic">Antarctic</option>
  </select>
</div>

{/* btn para filtrar x actividad */ }
{/* {unicos.length === 0 ?
 <p>Crea actividades para filtrarlas</p>
 : <select className={StyleHome.btnAdmin} onChange={ev => handleActividades(ev)}>
   {unicos.map((ev) => (
     <option value={ev} > {ev} </option>
   ))}
 </select>
} */}

{/* btn para ordenar AZ y ZA */ }
<div >
  <label >Alphabet: </label>
  <select>
    <option selected={true} disabled="disabled">
      ---
    </option>
    <option value="ascending">A-Z</option>
    <option value="descending">Z-A</option>
  </select>
</div>

{/* btn para ordenar > y < poblacion */ }
<select >
  <option value='asendente'>Mayor Poblacion</option>
  <option value='desendente'>Menor Poblacion</option>
</select>
{/* mostrar paises */ }
<div>
  {/* {currentCountries?.length > 0 ? (
   currentCountries?.map((co, i) => {
     return (
       <div key={i}>
         <Cards
           flag={co.flag}
           name={co.name}
           continent={co.continent}
           id={co.id}
         />
       </div>
     );
   })
 ) : ( */}
  <div>Loading ...</div>
  {/* )} */}
</div>
paginado
