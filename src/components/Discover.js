import React from 'react'
import discover from '../images/discover.png'
const Discover = () => {
  return (
    <main className='container mt-12 md:flex flex-row-reverse justify-between items-center'>
        <div className='mb-12'>
            <img src={discover} alt="hero-img" border="0" />
        </div>
        <div className='text-center sm:text-left md:max-w-[40%] space-y-8'>
            <h1 className='text-5xl font-bold '> Discover the power of Charik</h1>
            <p className='text-xl'> Dive into our list of features and see how Charik can transform your sales strategy, making every interaction more impactful and every decision more informed. Prepare to redefine what you thought was possible with HubSpot CRM.</p>
            <a href='https://www.charik.fr/meetings/jimmy5/demo?uuid=6f780268-bc14-4a37-9ebb-4f336ca6a858' target='_blank' rel='noopener noreferrer'>
            <button className="bg-amber-950 text-white px-6 py-3 rounded-lg hover:bg-orange-900">Live Demo</button>
          </a>
        </div>
    </main>
  )
}
export default Discover