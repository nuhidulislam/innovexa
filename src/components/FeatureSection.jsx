import aboutImg from "../assets/about.jpg"; 
const FeatureSection = () => {
  return (
    <section className="bg-bgthird py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="flex-1">
          <img
            src={aboutImg}
            alt="Team collaboration"
            className="w-full h-[350px] md:h-[420px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-dark leading-tight">
            AGILE, ADAPTIVE,
            <br />
            <span className="text-primary">AND ALWAYS ALIGNED</span>
          </h2>
          <p className="text-dark text-base md:text-lg mt-6 mb-8">
            From discovery to delivery, we adapt to your workflow and
            priorities. Our flexible process ensures every solution is not only
            beautiful and functional but also practical and sustainable for your
            team.
          </p>
          <button className="bg-primary text-dark font-medium px-6 py-2 rounded-full hover:bg-bgprimary hover:text-primary transition">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
