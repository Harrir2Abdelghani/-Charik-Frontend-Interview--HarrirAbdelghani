import React from 'react'
import numoo from '../images/numoo.png'
import ouest from '../images/ouest.png'
import web from '../images/web.png'
import tickey from '../images/tickey.jpg'
const Clients = () => {
  return (
    <div className="bg-gray-100 py-12 ">
  {/* Header Section */}
  <div className="text-center mb-8 px-4 mt-12">
    <h3 className="text-l text-gray-500">Our Clients</h3>
    <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mt-2">
      They connected HubSpot with Charik
    </h2>
    <div className="mt-2">
      <hr className="w-16 mx-auto border-t-4 border-red-500" />
    </div>
  </div>
  {/* Client Logos Section  */}
  <div className="flex flex-wrap justify-center items-center space-x-8 gap-14 md:gap-20 mb-12 mt-20">
  <img
      src={ouest}
      alt="Ouest"
      className="h-16 md:h-24 w-auto mb-4"
    />
    <img
      src={numoo}
      alt="Client 1"
      className="h-16 md:h-24 w-auto mb-4"
    />
    <img
      src={web}
      alt="Client 3"
      className="h-16 md:h-24 w-auto mb-4"
    />
    <img
      src={tickey}
      alt="Client 4"
      className="h-16 md:h-24 w-auto mb-4"
    />
  </div>
</div>
  )
}

export default Clients