import React from 'react'
import FeaturesCard from './FeaturesCard'
import pic1 from '../images/pic1.png'
import pic2 from '../images/pic2.png'
import pic3 from '../images/pic3.png'
import pic4 from '../images/pic4.png'
import pic5 from '../images/pic5.png'
import pic6 from '../images/pic6.png'
import pic7 from '../images/pic7.png'
import pic8 from '../images/pic8.png'
import pic9 from '../images/pic9.png'
import pic10 from '../images/pic10.png'
import pic11 from '../images/pic11.png'
import pic12 from '../images/pic12.png'
import pic13 from '../images/pic13.png'
import search from "../images/search.png"

const FeaturesSec = () => {
  return (
    <>
<section className="bg-gray-100 rounded-2xl  mt-2 text-center md:text-left flex flex-col items-center">
<div>
        <h1 className='mb-8 mt-32 text-3xl font-bold text-center text-orange-700'>Discover our key features</h1>
        <p className=' mx-24 text-lg text-center text-gray-500'>Our clients save an average of 8 hours per month by connecting Charik to HubSpot, thanks to our advanced features, which are often unique at this level of integration with your favorite CRM.</p>
        <hr class="w-48 h-1 mx-auto my-4 bg-red-500 border-0 rounded md:my-10"></hr>
    </div>
    <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {/* Features Card that will be used 3 times in the grid */}
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
    <FeaturesCard
      imgSrc={pic6}
      title="Add Contacts"
      info="Toss your keyboards aside, add a contact with just one click."
    />
    <FeaturesCard
      imgSrc={pic7}
      title="Email Finder"
      info="Uncover the professional email addresses of your contacts."
    />
    <FeaturesCard
      imgSrc={pic8}
      title="Phone Finder"
      info="Link your favorite data provider: Kaspr, Apollo, ..."
    />
    <FeaturesCard
      imgSrc={pic9}
      title="Linkedin contact"
      info="Add a contact from LinkedIn with just one click."
    />
    <FeaturesCard
      imgSrc={pic10}
      title="No duplicates"
      info="Finally, an app that doesn't add duplicates."
    />
    <FeaturesCard
      imgSrc={pic11}
      title="Gender Reveal"
      info="Feeling your greetings lack spark? Allow us to assist."
    />
    <FeaturesCard
    imgSrc={pic12}
    title="Get Financial data"
    info="Corporate financial information, directly within HubSpot."
  />
  <FeaturesCard
      imgSrc={pic13}
      title="Balance Sheets"
      info="Access and annotate the latest 3 financial statements of companies (France only)"
    />
    <FeaturesCard
      imgSrc={pic13}
      title="Finances Filters"
      info="Refine your search by focusing on revenue or profit growth (French companies)"
    />
    </div>
</section>
</>
  )
}
export default FeaturesSec