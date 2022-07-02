import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'


export default function Cards({currentCountry}) {
    return (
        <div>
            {
      currentCountry?.map(c => {
          return (
          <div key={c.id}>
          <Link to={`/detail/${c.id}`}>
            <Card
              imgFlag={c.imgFlag}
              name={c.name}
              continent={c.continent}
            />
          </Link>
          </div>
          )})
      }
        </div>
    )
}