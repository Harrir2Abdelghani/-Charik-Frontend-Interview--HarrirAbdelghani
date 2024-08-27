import React from 'react'
import hero from '../images/hero.svg'
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <main className='container mt-12 md:flex flex-row-reverse justify-between items-center'>
        <div className='md:max-w-[50%] '>
            <img src={hero} alt="hero-img" border="0" />
        </div>
        <div className='text-center sm:text-left md:max-w-[40%] space-y-8'>
            <h1 className='text-5xl font-bold '> Get the <br /> <span className='text-amber-950'>Sales Intelligence 🦚</span> <span className='text-orange-400'>made for HubSpot 🚀 </span></h1>
            <p className='text-xl'> Add contacts and companies from anywhere: LinkedIn, the web, ... and even HubSpot itself.</p>
            <h2 className='text-3xl font-bold'>Save Time, Sell More.</h2>
            <Link to='/pricing'>
            <button className=" bg-amber-950 text-white mt-10 px-6 py-3 rounded-lg hover:bg-orange-900">Discover our offers</button>
            </Link>
        </div>
    </main>
  )
}
export default Hero