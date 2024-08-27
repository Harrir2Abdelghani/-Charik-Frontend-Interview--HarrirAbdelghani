import React from 'react'
import company from '../images/company.png'
const CompanySearch = () => {
  return (
    <div className="bg-pink-50 py-12 px-4 sm:px-8 md:px-16 lg:px-32">
  <h1 className="text-3xl sm:text-4xl font-bold text-orange-900 text-center">
    Discover Charik Company Search
  </h1>
  <div className="max-w-8xl flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-20">
  <div className="lg:w-1/2 lg:mr-80 flex justify-center lg:justify-end">
  <img
    src={company}
    alt="Discover Company"
    className=" max-w-xs sm:max-w-sm h-48 w-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72"
  />
</div>
    <div className=" text-center lg:text-left lg:ml-12">
      <p className="text-xl sm:text-2xl font-semibold text-gray-800 mt-4">
        Effortlessly discover and integrate companies into your CRM
      </p>
      <p className="text-gray-600 mt-2">
        <strong>Charik Company Search</strong> streamlines your ability to find and add businesses based on specific criteria such as city, country, industry, etc., directly into HubSpot CRM, enhancing your prospecting efforts.
      </p>
      <p className="text-orange-500 mt-3 text-sm">
        Stop wasting your time on manual searches for companies.
      </p>
      <div className="mt-8">
      <a href='https://www.charik.fr/en/sign-up'>
            <button className="w-full bg-gradient-to-r from-orange-500 to-orange-900 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:from-orange-300 hover:to-red-500 transition-all">Try Charik
              <br/>
              14-day Free Trial
              <span className="ml-2">→</span></button>
          </a>
      </div>
    </div>
  </div>
</div>

  )
}

export default CompanySearch