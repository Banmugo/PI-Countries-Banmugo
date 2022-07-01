import React from 'react'

export default function Page({countriesXPage, allCountries, paginado}) {
    const pageNumber = [];

    for(let i = 0; i < Math.ceil(allCountries/countriesXPage); i++){
        pageNumber.push(i+1)
    }
    // console.log(pageNumber)
    // console.log(allCountries)

  return (
    <nav>
        <ul className='paginado'>
            { pageNumber && pageNumber.map(number =>(
                <li className='number' key={number}>
                    <a onClick={()=> paginado(number)}>{number}</a>
                </li>
            ))}
        </ul>
    </nav>
  )
}
