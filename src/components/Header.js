import React, { useState } from 'react';
import '../index.css'
import { MenuIcon } from '@heroicons/react/solid';
import {  XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className='fixed top-0 left-0 w-full flex text-black justify-between bg-orange-50 items-center shadow-md md:shadow-none h-12  z-50'>
      <Link to="/">
          <img src={require('../images/logo.png')} alt="charik" className="h-10" />
      </Link>
      <div className='flex items-center'>
        {/* Small Devices Menu*/}
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <XIcon className='h-10 text-gray-700' />
            ) : (
              <MenuIcon className='h-10 text-gray-700' />
            )}
          </button>
        </div>
        {/* Large Devices Menu */}
        <div className='hidden md:flex items-center space-x-3 lg:space-x-7'>
          <div className="relative inline-block text-left group">
            <Link to="/" className="nav-item hover:border-b-2 border-orange-900 cursor-pointer">Charik</Link>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10 opacity-0 group-hover:opacity-100 transform translate-y-0 group-hover:translate-y-2 transition-all duration-300">
              <ul className="py-1 text-gray-700">
                <li>
                  <Link to="/software" className="block px-4 py-2 nav-item border-orange-900 hover:bg-gray-100">Software</Link>
                </li>
                <li>
                  <Link to="/email" className="block nav-item px-4 py-2 hover:bg-gray-100">Email Finder 💌</Link>
                </li>
                <li>
                  <Link to="/company" className="block nav-item px-4 py-2 hover:bg-gray-100">Company Search🔎</Link>
                </li>
              </ul>
            </div>
          </div>
          <Link to="/pricing" className='nav-item hover:border-b-2 border-orange-900'>Pricing</Link>
          <Link to="/about" className='nav-item hover:border-b-2 border-orange-900'>About</Link>
          <div className="relative inline-block text-left group">
          <Link to="/insights" className='nav-item hover:border-b-2 border-orange-900'>Resources</Link>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10 opacity-0 group-hover:opacity-100 transform translate-y-0 group-hover:translate-y-2 transition-all duration-300">
              <ul className="py-1 text-gray-700">
                <li>
                  <Link to="/insights" className="block px-4 py-2 nav-item border-orange-900 hover:bg-gray-100">Insights</Link>
                </li>
                <li>
                  <Link to="https://www.charik.fr/en/help" target='_blank' className="block nav-item px-4 py-2 hover:bg-gray-100">Knowledge Base</Link>
                </li>
                <li>
                  <Link to="https://charik.app/verify"  target='_blank' className="block nav-item px-4 py-2 hover:bg-gray-100">SPF Tester</Link>
                </li>
              </ul>
            </div>
          </div>
          <a href='https://www.charik.fr/meetings/jimmy5/demo?uuid=6f780268-bc14-4a37-9ebb-4f336ca6a858' target='_blank' rel='noopener noreferrer'>
            <button className="bg-amber-950 text-white px-6 py-3 rounded-lg hover:bg-orange-900">Demo</button>
          </a>
        </div>
      </div>
      {/* Mobile Menu Sidebar  */}
      <div className={`fixed top-0 left-0 w-full bg-white shadow-md z-40 ${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className='flex flex-col items-center py-4'>
          <button className='self-end px-4 py-2' onClick={() => setIsOpen(false)}>
            <XIcon className='h-8 text-gray-700' />
          </button>
          <Link to="/" className="nav-item py-2 px-4 hover:bg-gray-100 w-full text-center">Charik</Link>
          <Link to="/software" className="nav-item py-2 px-4 hover:bg-gray-100 w-full text-center">Software</Link>
          <Link to="/email" className="nav-item py-2 px-4 hover:bg-gray-100 w-full text-center">Email Finder 💌</Link>
          <Link to="/company" className="nav-item py-2 px-4 hover:bg-gray-100 w-full text-center">Company Search🔎</Link>
          <Link to="/pricing" className="nav-item py-2 px-4 hover:bg-gray-100 w-full text-center">Pricing</Link>
          <Link to="/about" className="nav-item py-2 px-4 hover:bg-gray-100 w-full text-center">About</Link>
          <Link to="/insights" className='nav-item hover:border-b-2'>Resources</Link>
          <Link to="/insights" className="block px-4 py-2 nav-item hover:bg-gray-100">Insights</Link>
          <Link to="https://www.charik.fr/en/help" target='_blank' className="block nav-item px-4 py-2 hover:bg-gray-100">Knowledge Base</Link>
          <Link to="https://charik.app/verify"  target='_blank' className="block nav-item px-4 py-2 hover:bg-gray-100">SPF Tester</Link>
          <a href='https://www.charik.fr/meetings/jimmy5/demo?uuid=6f780268-bc14-4a37-9ebb-4f336ca6a858' target='_blank' rel='noopener noreferrer'>
            <button className="bg-amber-950 text-white px-6 py-3 rounded-lg hover:bg-orange-900">Demo</button>
          </a>
        </div>
      </div>
    </header>
  );
}
export default Header