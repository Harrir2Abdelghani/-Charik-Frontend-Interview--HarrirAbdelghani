import React from 'react'
import FeaturesCard from './FeaturesCard'
import pic1 from '../images/pic1.png'
import pic2 from '../images/pic2.png'
import pic3 from '../images/pic3.png'
import pic4 from '../images/pic4.png'
import pic5 from '../images/pic5.png'
import search from "../images/search.png"
import { Link } from 'react-router-dom';
const Features = () => {
  return (
    <>
<section className="bg-red-50 rounded-2xl  mt-28 text-center md:text-left flex flex-col items-center">
<div>
        <h1 className='mb-8 mt-32 text-4xl font-bold text-center text-orange-400'>Discover our key features</h1>
        <p className=' mx-24 text-xl text-center text-black'>Our clients save an average of 8 hours per month by connecting Charik to HubSpot, thanks to our advanced features, which are often unique at this level of integration with your favorite CRM.</p>
        <hr class="w-48 h-1 mx-auto my-4 bg-amber-950 border-0 rounded md:my-10"></hr>
    </div>
    <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    <FeaturesCard
      imgSrc={pic1} className="h-2 w-3"
      title="Made for HubSpot"
      info="The finest integration experience you'll encounter with HubSpot"
    />
    <FeaturesCard
      imgSrc={search}
      title="Search Companies"
      info="Discover companies based on a variety of criteria."
    />
    <FeaturesCard
      imgSrc={pic2}
      title="Add companies"
      info="Add companies with just one click."
    />
    <FeaturesCard
      imgSrc={pic3}
      title="Segment your CRM"
      info="Segment your HubSpot database with dedicated fields."
    />
    <FeaturesCard
      imgSrc={pic4}
      title="Domain Finder"
      info="HubSpot requires a domain name. We'll find it for you."
    />
    <FeaturesCard
      imgSrc={pic5}
      title="Search Contacts"
      info="Generate a contact list directly from the company profile."
    />
    </div>
    {/* use Link component to link to the features page  */}
    <Link to="/features"  className="primary-button mt-9 mb-8 rounded-lg">Show More</Link>
</section>
</>
  )
}
export default Features