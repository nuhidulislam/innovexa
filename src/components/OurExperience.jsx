// src/components/OurExperience.jsx

const statsData = [
  {
    id: 1,
    number: "389",
    title: "Working Hours",
  color: "from-primary to-green-600 text-white",
  },
  {
    id: 2,
    number: "100",
    title: "Completed Projects",
    color: "from-white to-white text-dark shadow-md",
  },
  {
    id: 3,
    number: "49",
    title: "No. of Clients",
    color: "from-white to-white text-dark shadow-md",
  },
  {
    id: 4,
    number: "8+",
    title: "Team Member",
    color: "from-primary to-green-600 text-white",
  },
];

const OurExperience = () => {
  return (
    <section className="w-full py-16 bg-bgprimary">
      <div className="max-w-7xl mx-auto px-2 grid md:grid-cols-2 gap-6 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <span className="uppercase text-sm text-dark bg-white px-2 rounded-full font-semibold tracking-wide">
            Our Experience
          </span>
          <h2 className="text-3xl md:text-4xl leading-10 lg:text-5xl font-bold text-white ">
            We Have Completed <span className="text-primary">200 +</span>{" "}
            Projects Successfully.
          </h2>
          <div className="flex justify-start items-center gap-2 mb-6">
        
          <span className="w-20 h-[3px] bg-primary"></span>
          <span className="w-2 h-2 bg-primary rounded-full"></span>
          <span className="w-2 h-2 bg-primary rounded-full"></span>
          <span className="w-20 h-[3px] bg-primary"></span>
         
         
        </div>
          <p className="text-white max-w-lg ">
            Our journey has been marked by continuous learning, innovation, and
            a passion for delivering exceptional web solutions. Explore our rich
            history and discover how it shapes your digital future.
          </p>
          <button className="px-6 py-3 bg-primary text-black font-semibold rounded-lg shadow hover:bg-green-500 transition">
            Start A Project
          </button>
        </div>

        {/* Right Stats */}
        <div className="grid grid-cols-2 gap-6 ">
          {statsData.map((item,index) => (
             <div
              key={item.id}
              className={`p-8 rounded-2xl bg-gradient-to-r ${item.color} flex h-[200px] flex-col justify-center items-center
              ${index == 1 ? "mt-16" : ""} ${index == 2 ? "-mt-16" : ""}`}
            >
              <h3 className="text-4xl font-bold">{item.number}</h3>
              <p className="mt-2 text-md text-black font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurExperience;
