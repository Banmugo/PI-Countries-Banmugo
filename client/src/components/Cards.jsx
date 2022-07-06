import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import './styles/Cards.css'


export default function Cards({ currentCountry }) {
  return (
    <div >
      <div className='div'>
        {
          currentCountry?.map(c => {
            return (
              <div key={c.id} >
                <Link to={`/detail/${c.id}`}>
                  <Card
                    name={c.name}
                    imgFlag={c.imgFlag}
                    continent={c.continent}
                  />
                </Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}