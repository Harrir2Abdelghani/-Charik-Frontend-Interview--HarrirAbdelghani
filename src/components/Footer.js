import React from 'react'
import charik from '../images/charik.png'

const Footer = () => {
  return (
    <div className="relative bg-white py-5">
    <div className="mt-24 pt-2 pb-8">
      <div className="container mb-12 text-center sm:text-left grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
      <div className="ml-4 sm:ml-6 mb-10 mr-4 sm:mr-2 flex justify-center sm:justify-start">
  <img
    className="cursor-pointer w-full max-w-xs sm:max-w-none"
    src={charik}
    alt="logo"
  />
</div>
{/* Footer Items */}
<div className='ml-2 sm:ml-6 text-black'>
  <a href="/features" className="font-medium text-base sm:text-lg md:text-xl mb-3 sm:mb-4 block">Features</a>
  <a href="/email" className="font-medium text-base sm:text-lg md:text-xl mb-3 sm:mb-4 block">Email Finder</a>
  <a href="/company" className="font-medium text-base sm:text-lg md:text-xl mb-3 sm:mb-4 block">Company Search</a>
  <a href="/keypeople-search" className="font-medium text-base sm:text-lg md:text-xl mb-3 sm:mb-4 block">KeyPeople Search</a>
</div>
<div className='ml-2 sm:ml-6 text-black'>
  <a href="/insights" className="font-medium text-base sm:text-lg md:text-xl mb-3 sm:mb-4 block">Resources</a>
  <a href="/blog" className="font-medium text-base sm:text-lg md:text-xl mb-3 sm:mb-4 block">Read our blog</a>
  <a href="/partners" className="font-medium text-base sm:text-lg md:text-xl mb-3 sm:mb-4 block">Partners</a>
  <a href="https://www.charik.fr/en/help" target='_blank' className="font-medium text-base sm:text-lg md:text-xl mb-3 sm:mb-4 block">Knowledge base</a>
</div>
<div className='ml-2 sm:ml-6 text-black'>
  <a href="/company" className="font-medium text-lg sm:text-xl mb-4 block">Company</a>
  <a href="/software" className="font-medium text-lg sm:text-xl mb-4 block">Charik Software</a>
  <a href="/about" className="font-medium text-lg sm:text-xl mb-4 block">About us</a>
  <a href="/contact" className="font-medium text-lg sm:text-xl mb-4 block">Contact us</a>
</div>
        <div class="flex justify-center space-x-6  sm:justify-center sm:mt-0">
              <a href="https://www.facebook.com/charikapp" target="_blank" class="text-amber-950 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span class="sr-only">Facebook page</span>
              </a>
              <a href="#" class="text-amber-950 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
                  <span class="sr-only">Discord community</span>
              </a>
              <a href="https://x.com/charik_app" target='_blank' class="text-amber-950 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
                  <span class="sr-only">Twitter page</span>
              </a>
          </div>
          <div className="lg:col-span-2 ">
          <h6 className="text-black text-xl font-bold">
          Need a demo ?
          </h6>
          <h6 className="font-medium text-l">
          Have you met Jimmy:
          </h6>
          <div className="mt-6 border border-[#BCD0E5] rounded-md text-left">
            <input
              className="w-full p-2 bg-transparent outline-none"
              type="email"
              placeholder="Enter your Email"
            />
          </div>
          <button className="primary-button mt-6">Send</button>
        </div>
      </div>
    </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-black rounded-t-full text-white">
        <p className='text-white text-center mt-6'>Copyright © 2024 Charik</p>
      </div>
    </div>
  )
}
export default Footer