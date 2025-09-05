// src/components/OurServices.jsx
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

const servicesData = [
  {
    id: 1,
    title: "UI/UX Design",
    description:
      "We design intuitive user experiences and engaging interfaces that focus on usability, accessibility, and conversion optimization.",
    tags: ["Wireframes", "Prototyping", "UI Kits", "UX Audit"],
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Frontend Design",
    description:
      "Beautiful and responsive frontend designs that capture your brand identity and deliver seamless user journeys.",
    tags: [
      "Responsive Layouts",
      "Design Systems",
      "Animations",
      "Accessibility",
    ],
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Frontend Development",
    description:
      "We build fast, optimized, and scalable frontend applications using the latest technologies and frameworks.",
    tags: ["React", "Tailwind CSS", "Next.js", "Performance Tuning"],
    image:
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Backend REST API Development",
    description:
      "Secure and scalable backend systems with well-documented REST APIs to power your applications.",
    tags: ["Node.js", "Express.js", "REST APIs", "Authentication"],
    image:
      "https://images.unsplash.com/photo-1618477247222-acbdb0d4a4ad?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Database Design",
    description:
      "We design efficient and reliable database structures that ensure scalability and high performance.",
    tags: ["MySQL", "MongoDB", "PostgreSQL", "Data Modeling"],
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "API Integration and Performance Optimization",
    description:
      "Seamless third-party API integration with performance tuning to ensure smooth and optimized workflows.",
    tags: ["REST API", "GraphQL", "Caching", "Optimization"],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    title: "Application Performance and SEO",
    description:
      "Boost your app speed and search engine ranking with performance audits, optimizations, and SEO strategies.",
    tags: ["Page Speed", "SEO Audit", "Keyword Research", "Core Web Vitals"],
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
  },
];

const OurServices = () => {
  return (
    <section className="bg-bgthird mx-auto py-16 px-4 md:px-8 ">
      <div className="max-w-7xl flex gap-8 md:flex mx-auto items-center">
        <div className="flex-1 flex flex-col gap-4">
          <span className="text-xs font-semibold bg-dark text-secondary px-3 py-1 rounded-full w-fit self-start">
            Our Services
          </span>

          <h2 className="text-4xl mt-6 lg:text-[45px] font-extrabold text-primary mb-2">
            CREATIVE SOLUTIONS.
          </h2>
          <h3 className="text-4xl lg:text-[42px] font-extrabold text-dark mb-4">
            STRATEGIC EXECUTION.
          </h3>
        </div>
        <div className="flex-1">
          <p className="text-dark text-sm md:text-base mb-6">
            We offer a range of design and digital services to help you build,
            launch, and grow with confidence — from your first visual identity
            to your full digital ecosystem.
          </p>
          <button className="bg-primary rounded-2xl text-dark px-6 py-2 flex items-center gap-2 hover:bg-bgprimary hover:text-primary transition">
            View All Services <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Cards with scroll effect */}
      <div className=" mt-16 max-w-7xl mx-auto flex flex-col gap-14 ">
        {servicesData.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }} // 👈 বারবার ট্রিগার হবে
            className={`max-w-7xl p-10 mx-auto rounded-2xl shadow-lg flex flex-col lg:flex-row items-center gap-6 
    ${index % 2 === 0 ? "bg-secondary" : "bg-primary"}`}
          >
            {/* Side Number + Image */}
            <div className="flex-1 text-bgprimary">
              <div className="flex flex-col md:flex-row gap-4 items-start">
                {/* Number */}
                <span className="text-3xl md:text-4xl font-bold">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Image */}
                <div className="md:w-[450px] max-w-md">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 md:h-80 lg:h-96 max-h-[400px] rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 text-left flex flex-col gap-6">
              <h4 className="text-dark font-bold text-3xl md:text-5xl">
                {service.title}
              </h4>
              <p className="text-dark text-base md:text-lg">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-bgprimary border border-bgprimary px-2 py-1 rounded text-sm md:text-lg hover:bg-bgprimary hover:text-secondary transition"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div>
                <button className="bg-dark text-secondary px-4 py-2 rounded hover:bg-bgprimary hover:text-primary transition ">
                  Read More
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
