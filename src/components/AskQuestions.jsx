import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

// FAQ Data - Updated for your services
const faqData = [
  {
    id: 1,
    question: "What is included in your UI/UX design service?",
    answer:
      "We provide wireframing, prototyping, user journey mapping, and visually appealing UI designs to ensure seamless and user-friendly experiences.",
  },
  {
    id: 2,
    question: "Do you create responsive frontend designs?",
    answer:
      "Yes, all our frontend designs are fully responsive and optimized for desktop, tablet, and mobile devices using modern frameworks like React and Tailwind CSS.",
  },
  {
    id: 3,
    question: "Which technologies do you use for frontend development?",
    answer:
      "We mainly work with React.js, Next.js, and Tailwind CSS to build fast, scalable, and optimized frontend applications.",
  },
  {
    id: 4,
    question: "Do you build backend REST APIs?",
    answer:
      "Yes, we develop secure and scalable REST APIs using Node.js and Express.js, with proper authentication and documentation.",
  },
  {
    id: 5,
    question: "Can you design and manage databases?",
    answer:
      "We design relational and non-relational databases using MySQL, PostgreSQL, and MongoDB, ensuring efficiency, security, and scalability.",
  },
  {
    id: 6,
    question: "Do you provide API integration and optimization?",
    answer:
      "Yes, we integrate third-party APIs and also optimize them for better performance with caching, rate-limiting, and error handling.",
  },
  {
    id: 7,
    question: "How do you improve application performance and SEO?",
    answer:
      "We conduct performance audits, optimize loading speed, improve Core Web Vitals, and follow SEO best practices to boost your search engine ranking.",
  },
];

// Contact Data
const contactData = {
  phone: {
    label: "24/7 Customer care",
    value: "+(62) 123 456 7890",
  },
  email: {
    label: "For Technical Issues",
    value: "hello@echodigital.com",
  },
};

const AskQuestions = () => {
  return (
    <section className="bg-bgthird py-12 px-6 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Section */}
        <div>
          <p className="uppercase bg-dark p-1 w-fit rounded-full text-secondary text-xs font-semibold tracking-wide ">
            Frequently Ask Questions
          </p>
          <h2 className="text-5xl text-primary md:text-5xl font-bold leading-snug mt-4">
            Need Help?
          </h2>
          <h1 className="text-5xl text-dark md:text-5xl font-bold leading-snug mt-4">
            We're here to <br /> answer
          </h1>

          {/* Contact Info */}
          <div className="mt-8 space-y-6 text-sm text-dark">
            <div className="flex items-center gap-3">
              <span className="text-primary text-4xl">
                <FaPhoneAlt />
              </span>
              <div>
                <p className="font-semibold text-[20px] mb-1">
                  {contactData.phone.label}
                </p>
                <p className="text-gray">{contactData.phone.value}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-primary text-4xl">
                <FaEnvelope />
              </span>
              <div>
                <p className="font-semibold text-[20px] mb-1">
                  {contactData.email.label}
                </p>
                <p className="text-gray">{contactData.email.value}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Accordion */}
        <div className="w-full">
          {faqData.map((item) => (
            <div key={item.id} className="collapse collapse-plus bg-base-200 mb-4">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-[22px] rounded-2xl p-4 bg-primary font-bold text-dark">
                {item.question}
              </div>
              <div className="collapse-content p-3">
                <p className="text-gray">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AskQuestions;
