import React from 'react'
import discover from '../images/discover.png'
const About = () => {
  return (
<div className='container shodow-lg  '>
<main className='container mt-12 flex flex-col-reverse md:flex-row space-x-4 justify-between items-center'>
    <div className='w-full md:w-1/2 mb-8 md:mb-0 flex justify-center'>
        <img src={discover} alt="Discover Charik" className='w-full max-w-xs md:max-w-none h-auto' />
    </div>
    <div className='text-center p-4'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4'>
            Make Sales Intelligence available for every HubSpot User
        </h1>
        <p className='text-sm sm:text-base md:text-lg lg:text-xl'>
            Empower every HubSpot user with Sales Intelligence to revolutionize sales strategy and drive success.
            Gain valuable insights, identify key opportunities, and make informed decisions for increased sales and growth.
        </p>
    </div>
</main>
{/*Create the timeline of the software development process*/}
<main className='container mt-12'>
    <h1 className='text-4xl font-bold text-center mt-20 mb-12 text-orange-900'>A Charik Story</h1>
    <ol className='relative border-l border-gray-200 dark:border-gray-700'>
        <li className='mb-10 pl-6 relative'>
            <span className='absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
                <svg className='w-2.5 h-2.5 text-blue-800 dark:text-blue-300' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 20 20'>
                    <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z'/>
                </svg>
            </span>
            <h3 className='flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
                Start your Sales Intelligence Journey
                <span className='bg-blue-100 text-amber-950 text-bold text-sm font-medium ml-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300'>
                    Latest
                </span>
            </h3>
            <time className='block mb-2 text-sm font-normal text-gray-400 dark:text-gray-500'>Why not today?</time>
            <p className='text-base font-normal text-gray-500 dark:text-gray-400'>Speed up the process of closing deals.</p>
        </li>
        <li className='mb-10 pl-6 relative'>
            <span className='absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
                <svg className='w-2.5 h-2.5 text-blue-800 dark:text-blue-300' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 20 20'>
                    <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z'/>
                </svg>
            </span>
            <h3 className='mb-1 text-lg font-semibold text-gray-900 dark:text-white'>Launching the Partner Program</h3>
            <time className='block mb-2 text-sm font-normal text-gray-400 dark:text-gray-500'>May 2024</time>
            <p className='text-base font-normal text-gray-500 dark:text-gray-400'>Establishing a network of HubSpot experts eager to deliver productivity enhancements to their clients.</p>
        </li>
        <li className='mb-10 pl-6 relative'>
            <span className='absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
                <svg className='w-2.5 h-2.5 text-blue-800 dark:text-blue-300' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 20 20'>
                    <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z'/>
                </svg>
            </span>
            <h3 className='mb-1 text-lg font-semibold text-gray-900 dark:text-white'>Charik V2.0</h3>
            <time className='block mb-2 text-sm font-normal text-gray-400 dark:text-gray-500'>Apr 2024</time>
            <p className='text-base font-normal text-gray-500 dark:text-gray-400'>One year post v1.0, we are proud to unveil our latest Website and Software update designed to enhance the utilization of sales intelligence for HubSpot Users.</p>
        </li>
        <li className='mb-10 pl-6 relative'>
            <span className='absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
                <svg className='w-2.5 h-2.5 text-blue-800 dark:text-blue-300' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 20 20'>
                    <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z'/>
                </svg>
            </span>
            <h3 className='mb-1 text-lg font-semibold text-gray-900 dark:text-white'>Startup Alpha at WebSummit Qatar</h3>
            <time className='block mb-2 text-sm font-normal text-gray-400 dark:text-gray-500'>Feb 2024</time>
            <p className='text-base font-normal text-gray-500 dark:text-gray-400'>We are delighted to have been selected as one of the 100 startups invited to participate in the inaugural WebSummit in Qatar.</p>
        </li>
        <li className='mb-10 pl-6 relative'>
            <span className='absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
                <svg className='w-2.5 h-2.5 text-blue-800 dark:text-blue-300' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 20 20'>
                    <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z'/>
                </svg>
            </span>
            <h3 className='mb-1 text-lg font-semibold text-gray-900 dark:text-white'>Public Launch of Charik</h3>
            <time className='block mb-2 text-sm font-normal text-gray-400 dark:text-gray-500'>Dec 2023</time>
            <p className='text-base font-normal text-gray-500 dark:text-gray-400'>Launching our first website and introducing the release of our cutting-edge sales intelligence software.</p>
        </li>
        <li className='mb-10 pl-6 relative'>
            <span className='absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
                <svg className='w-2.5 h-2.5 text-blue-800 dark:text-blue-300' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 20 20'>
                    <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z'/>
                </svg>
            </span>
            <h3 className='mb-1 text-lg font-semibold text-gray-900 dark:text-white'>Charik V1.0</h3>
            <time className='block mb-2 text-sm font-normal text-gray-400 dark:text-gray-500'>Apr 2023</time>
            <p className='text-base font-normal text-gray-500 dark:text-gray-400'>A select group of customers placed their trust in us, and together we collaborated to create the inaugural version of our product.</p>
        </li>
        <li className='mb-10 pl-6 relative'>
            <span className='absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
                <svg className='w-2.5 h-2.5 text-blue-800 dark:text-blue-300' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 20 20'>
                    <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z'/>
                </svg>
            </span>
            <h3 className='mb-1 text-lg font-semibold text-gray-900 dark:text-white'>HubSpot Partnership</h3>
            <time className='block mb-2 text-sm font-normal text-gray-400 dark:text-gray-500'>Aug 2016</time>
            <p className='text-base font-normal text-gray-500 dark:text-gray-400'>Jimmy (our Founder and CEO) started his journey as a HubSpot Partner and rapidly evolved as one of the top 20 HubSpot Partners Worldwide.</p>
        </li>
    </ol>
</main>
</div>
  )
}
export default About