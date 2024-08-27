import antoine from '../images/antoine.jpeg'
import toufik from '../images/toufik.jpeg'
import soukanda from '../images/soukanda.jpeg'
const TestimonialSection = () => {
  return (
    <section className="bg-white    py-12  text-center">
    <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
      <div className="space-y-10">
        {/* Testimonial 1 */}
        <div className="w-full">
          <ExpertItem
            imgSrc={antoine}
            text="Charik is an essential tool for any company looking to leverage HubSpot to its full potential."
          />
          <p className="font-bold text-l text-justify text-orange-500">Antoine.C</p>
          <p className="font-bold text-l text-justify text-orange-300">★★★★★</p>
        </div>
        {/* Testimonial 2 */}
        <div className="w-full">
          <ExpertItem
            imgSrc={toufik}
            text="Charik enabled us to quickly enter a new market by integrating new contacts."
          />
          <p className="font-bold text-l text-justify text-orange-500">Toufik.T</p>
          <p className="font-bold text-l text-justify text-orange-300">★★★★★</p>
        </div>
        {/* Testimonial 3 */}
        <div className="w-full">
          <ExpertItem
            imgSrc={soukanda}
            text="The financial features integrated directly into HubSpot allow for a quick analysis."
          />
          <p className="font-bold text-l text-justify text-orange-500">Soukanda.B</p>
          <p className="font-bold text-l text-justify text-orange-300">★★★★★</p>
        </div>
      </div>
      {/* Heading and Paragraph Section */}
      <div className="hidden md:block mt-16 md:mt-24 lg:mt-32">
        <h2 className="text-3xl md:text-[32px] font-bold text-orange-900">Hear from Our Happy Customers</h2>
        <p className="mt-2 max-w-xl mx-auto">
          "At the heart of our success are the stories of those who trust and use our product. We are proud to share the testimonials of our valued customers, whose feedback drives us to continue delivering exceptional results."
        </p>
      </div>
    </div>
    {/* Flex Container for Additional Content */}
    <div className="mt-12 flex flex-col md:flex-row gap-4 items-center justify-center">
    </div>
  </section>
      );
};
export default TestimonialSection;

function ExpertItem({ imgSrc, text }) {
    return (
      <div className=" max-w-md flex items-center even:flex-row-reverse md:flex-row-reverse md:first:flex-row md:last:flex-row">
        <img src={imgSrc} alt="" width="98px" style={{ borderRadius: "50%" }} />
        <div className="bg-white shadow-lg px-8 py-3 mx-2 max-w-[270px] md:max-w-none text-left rounded-full flex justify-center items-center mt-1.5">
          <div><p className="font-medium">{text}</p></div>
        </div>
      </div>
    );
  }