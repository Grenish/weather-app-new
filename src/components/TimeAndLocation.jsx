import React from 'react'

const TimeAndLocation = () => {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
            Saturday, 30 Sep 2023 | Local Time 10:00 PM
        </p>
      </div>
        <div className="flex items-center justify-center my-3">
            <p className="text-white text-xl font-extrabold">
                New York, USA
            </p>
        </div>
    </div>
  )
}

export default TimeAndLocation
