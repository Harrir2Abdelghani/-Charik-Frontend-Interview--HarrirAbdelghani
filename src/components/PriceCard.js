import React from "react";
function PriceCard() {
  return (
    <section className="container mt-28 text-center" id="pricing">
        <h3 className="text-[32px] font-bold">Price Table</h3>
        <div className="mt-11 grid gap-8 md:gap-5 md:grid-cols-2 lg:gap-8 xl:gap-16 justify-center">
        <div>
        <div className="border  min-w-[80vw] sm:min-w-[400px] md:min-w-full group even:text-white flex flex-col items-center rounded-xl shadow-borderShadow">
            <h4 className="mt-6 font-bold text-3xl text-orange-900">Single user</h4>
            <div className="mt-6 flex items-center">
            <div className="ml-2 flex flex-col items-start">
            <p className="text-3xl  group-even:text-white font-bold text-center">€59/ Month / user *</p>
            <hr class="w-48 h-1 mx-auto my-4 bg-red-500 border-0 rounded md:my-10"></hr>
                <p className="mt-2 text-xl">For users wishing to boost their business with HubSpot CRM.</p>
                <br/>
                <br/>
                <p>*100 B2B email finder / month</p>
                <p>*Unlimited companies searches</p>
                <p>*Unlimited contacts searches</p>
            </div>
            </div>
            <button className="primary-button mt-9 mb-8 group-even:primary-button-white rounded-lg">Start free Trail for 14 days </button>
        </div>
        <p className="mt-2 text-l  text-center">* Billed yearly</p>
        </div>
        <div>
        <div className="border min-w-[80vw] sm:min-w-[400px] md:min-w-full group even:text-white flex flex-col items-center rounded-xl shadow-borderShadow">
            <h4 className="mt-6 font-bold text-3xl text-orange-900">Team</h4>
            <div className="mt-6 flex items-center">
            <div className="ml-2 flex flex-col items-start">
            <p className="text-3xl  group-even:text-white font-bold text-center">€490/ Month + unlimited users*</p>
            <hr class="w-48 h-1 mx-auto my-4 bg-red-500 border-0 rounded md:my-10"></hr>
                <p className="mt-2 text-xl">For teams looking to grow their sales and increase their productivity with HubSpot CRM.</p>
                <br/>
                <br/>
                <p>*Unlimited users</p>
                <p>*10000 B2B email finder to share</p>
                <p>*Unlimited company searches</p>
            </div>
            </div>
            <button className="primary-button mt-9 mb-8 group-even:primary-button-white rounded-lg">Book a demo with Jimmy</button>
        </div>
        <p className=" mt-2 text-l  text-center">* Billed yearly</p>
        </div>
        </div>
    </section>
  );
}
export default PriceCard;