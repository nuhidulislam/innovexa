import aboutImg from "../assets/about.jpg"; 
const stats = [
  {
    number: "150+",
    label: "Projects",
    desc: "We’ve deliver impactful digital solutions.",
  },
  {
    number: "10",
    label: "Years",
    desc: "Your Goals, Backed by a Decade of Experience",
  },
];

export default function AboutUs() {
  return (
    <section className="bg-bgthird py-12 px-6 md:px-16">
      <div className="grid md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
        {/* Left Content */}
        <div>
          <span className="text-xs font-semibold bg-dark text-secondary px-3 py-1 rounded-full">
            ABOUT US
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-dark leading-tight">
           About Innovexa Solution <br />
            <span className="text-primary text-[35px]">Crafting Digital Excellence</span>
          </h2>

          <p className="mt-4 text-dark max-w-lg">
            Our journey began with a vision to empower businesses in the digital age. Over these years, we've honed our expertise in requirement analysis, UX/UI design, web design, web development, backend development, CI/CD (Continuous Integration/Continuous Deployment), and deployment. This comprehensive skill set allows us to offer you tailored solutions that not only meet but exceed your expectations.
          </p>

          {/* Stats Section */}
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-primary p-6 rounded-lg shadow-md border-l-4 border-bgprimary"
              >
                <div className="flex items-center space-x-2">
                  <h3 className="text-3xl font-extrabold text-bgprimary">
                    {item.number}
                  </h3>
                  <p className="uppercase text-sm font-semibold text-dark">
                    {item.label}
                  </p>
                </div>

                <p className="mt-3 text-dark text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={aboutImg}
            alt="About us"
            className="rounded-xl shadow-lg w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
