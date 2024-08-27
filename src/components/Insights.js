import React from 'react'
import insight from '../images/insight.png'

const Insights = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={insight}
            alt="Testimonial"
            className="rounded-lg w-64 sm:w-72 md:w-80 lg:w-96"
          />
        </div>
        <div className="text-center lg:text-left">
          <blockquote className="mt-4 text-2xl sm:text-3xl leading-relaxed font-semibold text-gray-900">
            "Our goal is to position your sales team for success quarter after quarter by enabling them to focus on high-value tasks and supporting their mental health to ensure they thrive both professionally and personally."
          </blockquote>
          <div className="mt-4">
            <p className="text-base font-medium text-gray-500">
              Jimmy, CEO @ Charik
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Insights