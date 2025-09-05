// src/components/Banner.jsx
import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
  return (
    <section className="bg-bgprimary text-secondary pb-20 pt-2 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left Side Content */}
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex flex-col gap-6">
            <h1 className="uppercase text-lg font-bold text-white tracking-widest">Innovate Today, Thrive Tomorrow</h1>
            
            
           <h1 className="text-4xl md:text-6xl text-primary font-extrabold leading-snug">  Innovexa  <span className="text-white font-medium">Solution.</span>
          </h1>
          </div>

          <p className="text-secondary text-base md:text-lg mt-6 mb-8 max-w-2xl">
            Innovexa Solution is a comprehensive web solutions company offering services such as requirement analysis, UX/UI design, web design, web development, backend development, CI/CD (Continuous Integration/Continuous Deployment), and deployment.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-dark px-6 py-3 rounded-full flex items-center gap-2 hover:bg-secondary hover:text-dark transition">
              Get Started <FaArrowRight />
            </button>
            <button className="bg-secondary text-dark px-6 py-3 rounded-full hover:bg-primary hover:text-dark transition">
              See All Services
            </button>
          </div>
        </div>

        {/* Right Side Links */}
        <div className="flex flex-col gap-3 text-primary text-right md:text-left">
          <a
            href="https://www.behance.net"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Behance
          </a>
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Dribbble
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
