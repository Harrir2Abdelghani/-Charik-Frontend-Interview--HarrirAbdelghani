import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import PriceCard from './components/PriceCard'
import TestimonialSection from './components/Testimonials'
import Footer from './components/Footer'
import Faq from './components/Faq'
import Clients from './components/Clients'
import Discover from './components/Discover'
import Email from './components/Email'
import EmailFeatures from './components/EmailFeatures'
import CompanySearch from './components/CompanySearch'
import CompanySearchFeatures from './components/CompanySearchFeatures'
import About from './components/About'
import FeaturesSec from './components/Features-sec'
import Blog from './components/Blog'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Insights from './components/Insights'
import Chat from './components/Chat'

const App = () => {
  return (
    <Router>
        <Routes>
        <Route 
            path='/pricing'
            element={
                <>
                <Header />
                <PriceCard />
                <Features />
                <TestimonialSection />
                <Clients />
                <Faq />
                <Footer />
                <Chat />
                </>
            }
        />
        <Route 
            path='/about'
            element={
                <>
                <Header />
                <About />
                <Footer />
                <Chat />
                </>
            } 
        />
        <Route 
            path='/'
            element={
                <>
                <Header />
                <Hero />
                <Features />  
                <TestimonialSection />
                <Blog />
                <Clients />
                <Footer />
                <Chat />
                </>
            }
        />
        <Route 
            path='/features'
            element={
                <>
                <Header />
                <FeaturesSec />  
                <Clients />
                <Footer />
                <Chat />
                </>
            }
        />
        <Route 
            path='/software'
            element={
                <>
                <Header />
                <Discover />
                <Features />
                <Footer />
                <Chat />
                </>
            }
        />
        <Route 
            path='/email'
            element={
                <>
                <Header />
                <Email />
                <EmailFeatures />
                <Clients />  
                <Footer />
                <Chat />
                </>
            }
        />
        <Route 
            path='/company'
            element={
                <>
                <Header />
                <CompanySearch />
                <CompanySearchFeatures />
                <Clients />  
                <Footer />
                <Chat />
                </>
            }
        />
        <Route 
            path='/insights'
            element={
                <>
                <Header /> 
                <Insights />
                <Blog /> 
                <Footer />
                <Chat />
                </>
            }
        />
        </Routes>
    </Router>
  )
}

export default App