import React from 'react'
import './styles/Page.css'

export default function Page({ countriesXPage, allCountries, paginado }) {
    const pageNumber = [];

    for (let i = 0; i < Math.ceil(allCountries / countriesXPage); i++) {
        pageNumber.push(i + 1)
    }
    // console.log(pageNumber)
    // console.log(allCountries)

    return (
        <nav>
            <ul>
                {pageNumber && pageNumber.map(number => {
                    return (
                        <button className='buttonPAge' key={number} onClick={() => paginado(number)}>{number}</button>
                    )
                }
                )}
            </ul>
        </nav>
    )
}
