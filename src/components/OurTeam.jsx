import { FaFacebook, FaGlobe, FaLinkedin, FaTwitter } from "react-icons/fa";
import Alamin from "../assets/alamin.jpg";
import Alauddin from "../assets/alauddin.jpg";
import Asik from "../assets/Asik.png";

const teamMembers = [
  {
    id: 1,
    name: "Nazmul Huda",
    role: "Full Stack Developer",
    image: Alamin,
    links: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 2,
    name: "Asik",
    role: "Frontend Developer",
    image: Asik,
    links: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 3,
    name: "Alauddin",
    role: "Frontend Developer",
    image: Alauddin,
    links: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 4,
    name: "Olivia Harris",
    role: "Project Manager",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    links: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 5,
    name: "Noah Williams",
    role: "Marketing Specialist",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    links: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 6,
    name: "Emma Johnson",
    role: "Content Writer",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    links: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
];

export default function OurTeam() {
  return (
    <section className="bg-[#1B3636] py-12 px-6">
      <div className="text-center max-w-4xl mx-auto mb-12">
        <span className="text-[16px] font-semibold bg-secondary text-dark px-3 py-1 rounded-full">
          Team Member
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-8 mb-4">
          We have some awesome people
        </h2>
        <div className="flex justify-center items-center gap-2 mb-6">
          <span className="w-2 h-2 bg-primary rounded-full"></span>
          <span className="w-2 h-2 bg-primary rounded-full"></span>
          <span className="w-32 h-[3px] bg-primary"></span>
          <span className="w-2 h-2 bg-primary rounded-full"></span>
          <span className="w-32 h-[3px] bg-primary"></span>
          <span className="w-2 h-2 bg-primary rounded-full"></span>
          <span className="w-2 h-2 bg-primary rounded-full"></span>
        </div>

        <p className="text-secondary opacity-80">
          At Innovexa Solution, our success is built on the expertise and
          dedication of our remarkable team. Each member brings a unique set of
          skills and a passion for delivering exceptional web solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="rounded-2xl p-4 shadow-lg bg-bgthird overflow-hidden"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-cover rounded-2xl"
            />
            <div className="text-center p-6">
              <h3 className="text-3xl font-semibold text-dark ">
                {member.name}
              </h3>
              <p className="text-dark opacity-70 mb-4">{member.role}</p>
              <div className="flex justify-center gap-2 text-dark text-xl">
                <a
                  className="w-10 h-10 flex items-center justify-center rounded-full transition-transform duration-300 hover:bg-primary hover:scale-110"
                  href={member.links.facebook}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook />
                </a>
                <a
                  className="w-10 h-10 flex items-center justify-center rounded-full transition-transform duration-300 hover:bg-primary hover:scale-110"
                  href={member.links.twitter}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  className="w-10 h-10 flex items-center justify-center rounded-full transition-transform duration-300 hover:bg-primary hover:scale-110"
                  href={member.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  className="w-10 h-10 flex items-center justify-center rounded-full transition-transform duration-300 hover:bg-primary hover:scale-110"
                  href={member.links.website}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGlobe />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
