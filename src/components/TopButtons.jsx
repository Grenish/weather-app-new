import React from 'react'

const TopButtons = () => {

    const cities = [
        {
            id: 1,
            title: 'New York',
        },
        {
            id: 2,
            title: 'Tokyo',
        },
        {
            id: 3,
            title: 'London',
        },
    ]


  return (
    <div className='flex items-center justify-around my-6'>
      {cities.map((city) => (
        <button
          key={city.id}
          className='text-gray-100 font-bold py-2'
        >
          {city.title}
        </button>
      ))}
    </div>
  )
}

export default TopButtons
