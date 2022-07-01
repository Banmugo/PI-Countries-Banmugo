import React from 'react'
import Card from './Card'

export default function Cards({currentCountry}) {
    return (
        <div>
            {
      currentCountry?.map(c => {
          return (
          <div key={c.id}>
            <Card
              imgFlag={c.imgFlag}
              name={c.name}
              continent={c.continent}
            />
          </div>
          )})
      }
        </div>
    )
}
