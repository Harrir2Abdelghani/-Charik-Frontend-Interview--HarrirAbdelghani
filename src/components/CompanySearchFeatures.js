import React from 'react'
const CompanySearchFeatures = () => {
  return (
    <div className="bg-pink-50 py-12 px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-3">
        <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
          <h3 className="text-2xl font-bold text-orange-900 mb-4">Advanced</h3>
          <p className="text-gray-800">
            <strong>Advanced Filters:</strong>  Leverage detailed filters to pinpoint companies by location, industry, or even name.
          </p>
          <p className="text-gray-800 mt-4">
            <strong>Accurate Results:</strong> Experience precise and relevant search outcomes, enabling you to effectively zero in on the companies that meet your specific needs.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
          <h3 className="text-2xl font-bold text-orange-900 mb-4">Integrated</h3>
          <p className="text-gray-800">
            <strong>ndividual or Bulk Addition:</strong> Whether you're looking to add companies one at a time or upload an entire list at once, our tool provides the necessary flexibility to optimally manage your contacts.
          </p>
          <p className="text-gray-800 mt-4">
            <strong>Integration with HubSpot CRM:</strong> With just a few clicks, you can import your search results directly into HubSpot CRM, ensuring a smooth and centralized management of your data.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
          <h3 className="text-2xl font-bold text-orange-900 mb-4">Fast</h3>
          <p className="text-gray-800">
            <strong>Automation:</strong>  Say goodbye to the tedious, time-consuming tasks. Charik revolutionizes the search and import process, freeing you up to focus on your core activities.
          </p>
          <p className="text-gray-800 mt-4">
            <strong>Quick Access:</strong>  Swiftly access the data of companies that interest you, thereby speeding up your prospecting and sales processes.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CompanySearchFeatures