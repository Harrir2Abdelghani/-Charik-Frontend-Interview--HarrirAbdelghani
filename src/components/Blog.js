import React from 'react'
import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'
const Blog = () => {
  return (
    <div className="bg-red-50 py-16 px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-2xl font-semibold text-orange-900">The Art of Smart Selling</h2>
      <h1 className="mt-2 text-3xl leading-8 font-extrabold text-gray-900 sm:text-4xl">
      Sales Intelligence Blog
      </h1>
      <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
      Dive into the future of selling with our blog on Sales Intelligence – where data meets strategy.
      </p>
      <div className="mt-2 w-16 h-1 bg-red-500 mx-auto"></div>
    </div>
    <div className="max-w-7xl mx-auto grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
        <img
          className="h-48 w-full object-cover"
          src={image1}
          alt="Prospection"
        />
        <div className="p-6">
          <div className="flex items-center rext-bold justify-start text-lg text-red-500 mb-2">
            <span>Prospection</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Optimisation de la Prospection de Leads
          </h3>
          <div className="flex justify-between text-gray-500 text-sm">
            <span>25 August 2024</span>
            <span>3 min read</span>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
        <img
          className="h-48 w-full object-cover "
          src={image2}
          alt="Trust journey"
        />
        <div className="p-6">
          <div className="flex items-center justify-start text-lg text-red-500 mb-2">
            <span>Prospection</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Trust journey : construire la confiance avec ses prospects
          </h3>
          <div className="flex justify-between text-gray-500 text-sm">
            <span>5 June 2024</span>
            <span>6 min read</span>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
        <img
          className="h-48 w-full object-cover"
          src={image3}
          alt="HubSpot"
        />
        <div className="p-6">
          <div className="flex items-center justify-start text-lg text-red-500 mb-2">
            <span>Charik</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Ajouter un contact dans HubSpot
          </h3>
          <div className="flex justify-between text-gray-500 text-sm">
            <span>14 May 2024</span>
            <span>6 min read</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Blog