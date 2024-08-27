import React from 'react'
import emailpic from '../images/emailpic.png'
const Email = () => {
  return (
    <div className="bg-red-50 py-12 px-4 sm:px-8 md:px-16 lg:px-32">
        <h1 className="text-4xl md:text-4xl font-bold text-orange-900 text-center">
            Discover Charik Email Finder
          </h1>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <p className="text-2xl font-semibold text-gray-800 mt-4">
          Discover your contacts professional emails with just a few clicks
          </p>
          <p className="text-gray-600 mt-4">
            Easily find your contacts' professional emails by simply inputting
            their first name, last name, and company.
          </p>
          <p className="text-gray-600 mt-2">
            Stop wasting time searching for your contacts' emails.
          </p>
          <p className="text-gray-600 mt-2">
            Try <strong>Charik Email Finder</strong> and see how our tool can
            revolutionize the way you work.
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
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={emailpic}
            className="w-full max-w-sm"
          />
        </div>
      </div>
    </div>
  )
}

export default Email