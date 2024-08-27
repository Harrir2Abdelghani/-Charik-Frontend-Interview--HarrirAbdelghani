import React from 'react'
const EmailFeatures = () => {
  return (
    <div className="bg-red-50 py-12 px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-3">
        <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
          <h3 className="text-2xl font-bold text-orange-900 mb-4">Trust</h3>
          <p className="text-gray-800">
            <strong>Verified Emails:</strong> Every email we provide undergoes thorough verification and validation. You can be absolutely certain that each email is accurate and fully operational.
          </p>
          <p className="text-gray-800 mt-4">
            <strong>High Success Rate:</strong> Our sophisticated algorithms ensure a high success rate, enabling you to locate the emails you need with unmatched precision.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
          <h3 className="text-2xl font-bold text-orange-900 mb-4">Speed</h3>
          <p className="text-gray-800">
            <strong>Speed:</strong> Say goodbye to the endless hours spent searching for contacts. Charik Email Finder delivers swift and reliable results, freeing you up to focus on what truly matters.
          </p>
          <p className="text-gray-800 mt-4">
            <strong>Efficiency:</strong> By automating the email search process, our tool saves you valuable time, thereby speeding up your outreach and communication efforts.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
          <h3 className="text-2xl font-bold text-orange-900 mb-4">Accuracy</h3>
          <p className="text-gray-800">
            <strong>Secure Data:</strong> Your data protection is our top concern. Every inquiry and outcome is handled with the utmost level of confidentiality.
          </p>
          <p className="text-gray-800 mt-4">
            <strong>Guaranteed Results:</strong> When we provide you with an email, we assure its accuracy and functionality, safeguarding you from the inconvenience of bounced or undelivered emails.
          </p>
        </div>
      </div>
    </div>
  )
}

export default EmailFeatures