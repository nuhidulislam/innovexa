import cartoon from "../assets/cartoon.mp4";
import growth from "../assets/data-growth.png";
import networking from "../assets/networking.png";
import target from "../assets/target.png";
const features = [
  {
    id: 1,
    icon: networking,
    title: "COLLABORA APPROACH",
    description:
      "We believe in working closely with our clients — listening, adapting, and building together every step of the way.",
  },
  {
    id: 2,
    icon: growth,
    title: "SCALABLE SOLUTIONS",
    description:
      "Our work isn’t just made to impress — it’s built to grow with you. We design with flexibility and future-proofing in mind.",
  },
  {
    id: 3,
    icon: target,
    title: "LONG-TERM MINDSET",
    description:
      "We care about the impact after launch. Think of us not just as a team for now, but a partner for what’s next.",
  },
];

const WhyChoose = () => {
  return (
    <section className="w-full bg-bgsecondary flex flex-col items-center gap-10 justify-center px-4 py-20">
      {/* title */}
      <div className="max-w-7xl  text-center">
        {/* Top Label */}
        <p className="text-dark px-3 py-1 bg-secondary inline-block text-[12px] rounded-2xl font-semibold tracking-wide mb-4 uppercase">
          Why Choose Us
        </p>

        {/* Main Heading */}
        <h2 className="text-primary text-5xl md:text-6xl font-extrabold mb-2">
          MORE THAN A SERVICE,
        </h2>
        <h3 className="text-secondary text-5xl md:text-6xl font-extrabold mb-6">
          A CREATIVE ALLY
        </h3>

        {/* Description */}
        <p className="text-secondary text-sm md:text-base max-w-3xl mx-auto">
          We don’t just work for you — we work{" "}
          <span className="italic">with</span> you. Our team becomes an
          extension of yours, translating your goals into smart, scalable, and
          beautifully-crafted digital experiences.
        </p>
      </div>
      <div className="max-w-7xl w-full">
        {/* Top Video */}
        <div className="flex justify-center mb-8">
          <video
            src={cartoon}
            className="rounded-2xl w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((item) => (
            <div
              key={item.id}
              className="bg-bgthird p-6 rounded-xl shadow-md flex flex-col items-start"
            >
              <div className="text-4xl mb-4 text-primary">
                <img
                  className="h-20 w-20 bg-primary  rounded-full"
                  src={item.icon}
                  alt="Hello"
                />
              </div>
              <h3 className="text-dark font-bold mb-2 text-[30px]">{item.title}</h3>
              <p className="text-dark/80 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
