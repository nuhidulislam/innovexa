import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const testimonials = [
  {
    id: 1,
    name: "Scott Ross",
    image: "https://randomuser.me/api/portraits/women/60.jpg",
    feedback:
      "The UX/UI design services from Innovexa Solution transformed our website's user experience. Our customers are delighted with the new interface, and it's reflected in our increased engagement metrics.",
  },
  {
    id: 2,
    name: "Kevin Strauser",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback:
      "The team at Innovexa Solution was highly professional in delivering a flawless website with responsive design. Their continuous integration and deployment approach made updates and maintenance a breeze.",
  },
  {
    id: 3,
    name: "Teresa Morrison",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    feedback:
      "I can't recommend Innovexa Solution enough. Their web development and backend development services streamlined our business operations, leading to increased efficiency and growth.",
  },
  {
    id: 4,
    name: "Eunice Spaulding",
    image: "https://randomuser.me/api/portraits/women/60.jpg",
    feedback:
      "Innovexa Solution's thorough requirement analysis set the foundation for our successful project. Their attention to detail and commitment to delivering on time and within budget were truly impressive.",
  },
  {
    id: 5,
    name: "Barry Harris",
    image: "https://randomuser.me/api/portraits/men/70.jpg",
    feedback:
      "Working with Innovexa Solution was a game-changer for our online presence. Their deployment process ensured a seamless transition, and we've seen a significant boost in our website's performance.",
  },
  {
    id: 6,
    name: "Walter Chavez",
    image: "https://randomuser.me/api/portraits/women/80.jpg",
    feedback:
      "Innovexa Solution exceeded our expectations with their web development expertise. Their attention to detail and dedication to our project ensured a seamless experience from start to finish.",
  },
];

export default function Testimonial() {
  return (
    <div className="bg-[#1B3636] ">
      <section className="bg-[#1B3636] max-w-7xl mx-auto py-16 px-4 text-secondary font-openSans">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-primary font-semibold tracking-widest uppercase">
            Testimonial
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4 text-secondary">
            What Clients Says?
          </h2>
          <div className="flex justify-center space-x-2 mb-6">
            <div className="w-8 h-1 bg-secondary"></div>
            <div className="w-8 h-1 bg-primary"></div>
            <div className="w-8 h-1 bg-secondary"></div>
            <div className="w-8 h-1 bg-primary"></div>
            <div className="w-8 h-1 bg-secondary"></div>
          </div>
          <p className="text-secondary max-w-2xl mx-auto mb-10">
            We take pride in delivering exceptional web solutions, and our
            clients' feedback reflects our commitment to excellence.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-bgsecondary/10 rounded-2xl p-8 shadow-lg text-center flex flex-col items-center">
                <span className="text-6xl text-primary">
                  <FaQuoteLeft />
                </span>
                <p className="italic text-secondary my-4">{item.feedback}</p>
                <div className="mt-6 flex flex-col items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-full border-2 border-primary object-cover"
                  />
                  <h4 className="mt-2 font-semibold text-secondary">
                    {item.name}
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}
