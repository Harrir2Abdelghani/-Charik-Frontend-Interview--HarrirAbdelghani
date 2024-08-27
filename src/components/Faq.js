import React, { useState } from 'react';

const Faq = () => {
  {/* State Hook for FAQs*/}
  const [activeIndex, setActiveIndex] = useState(null);
  {/* const faqs  */}
  const faqs = [
    {
      question: "Which version of Hubspot license is required?",
      answer: "Charik offers the most immersive integration in the market for Hubspot CRM. Our application is compatible with all versions of HubSpot, including Free, Starter, Pro, and Enterprise."
    },
    {
      question: "What is the minimum commitment to subscribe to Charik?",
      answer: "You have the flexibility to choose the Single user version with or without a commitment."
    },
    {
      question: "I use a solution to reveal phone Numbers, are you compatible ?",
      answer: "At Charik, we understand the significance of GDPR compliance, which is why safeguarding your data while providing the essential features you need is our top priority. By partnering with suppliers such as Kaspr or Apollo, we act as a central hub, seamlessly integrating their services into Hubspot through Charik."
    },
  ];
  {/* Toggle Answer Function  */}
  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto my-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {/* Map through FAQs using the faqs array and create a question and answer card for each one. */}
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            {/* Question Panel button for each card */}
            <button
              onClick={() => toggleAnswer(index)}
              className="w-full px-6 py-4 text-left text-xl font-semibold border-b border-gray-200 focus:outline-none"
            >
              {faq.question}
              <span className={`float-right transition-transform ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            {/* Answer Panel */}
            {activeIndex === index && (
              <div className="p-6 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Faq;
