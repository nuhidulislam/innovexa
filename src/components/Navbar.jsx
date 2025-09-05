import { useState } from "react";
import { HiChevronDown } from "react-icons/hi"; // arrow icon
import logo from "../assets/favicon.png";

const menuData = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  {
    title: "Pages",
    submenu: [
      { title: "Career", link: "/career" },
      { title: "FAQ", link: "/faq" },
      { title: "Services", link: "/services" },
      { title: "Pricing", link: "/pricing" },
      { title: "Portfolios", link: "/portfolios" },
      { title: "Partners", link: "/partners" },
      { title: "404", link: "/404" },
      { title: "System", link: "/system" },
    ],
  },
  {
    title: "Blog",
    submenu: [
      { title: "Tech", link: "/blog/tech" },
      { title: "Business", link: "/blog/business" },
      { title: "Design", link: "/blog/design" },
    ],
  },
  { title: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null); // track submenu open (desktop & mobile)

  const toggleMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  return (
    <nav className= "  bg-bgprimary text-secondary shadow-md">
      <div className="container max-w-7xl mx-auto flex justify-between items-center py-3">
        {/* Logo */}
        <div className="text-2xl font-bold flex gap-2  items-center text-primary">
          <div className="h-32 w-32 ">
            <img src={logo} alt="Logo" />
          </div>
          <div className="text-4xl text-secondary">
            <h1>Innovexa</h1>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {menuData.map((item, index) => (
            <li key={index} className="relative">
              <button
                onClick={() => item.submenu && toggleMenu(index)}
                className="hover:text-primary font-semibold transition-colors flex items-center"
              >
                {item.title}
                {item.submenu && (
                  <HiChevronDown
                    className={`ml-1 text-sm transform transition-transform ${
                      openMenu === index ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>

              {/* Dropdown */}
              {item.submenu && openMenu === index && (
                <ul className="absolute top-full left-0 bg-bgsecondary text-dark w-44 rounded-lg shadow-lg mt-2 p-2 z-20">
                  {item.submenu.map((sub, i) => (
                    <li key={i}>
                      <a
                        href={sub.link}
                        className="block px-3 py-2 bg-secondary hover:bg-primary hover:text-dark transition-colors"
                      >
                        {sub.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-secondary focus:outline-none text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-bgsecondary p-4 space-y-2">
          {menuData.map((item, index) => (
            <div key={index} className="border-b border-gray-300 pb-2">
              <button
                onClick={() => item.submenu && toggleMenu(index)}
                className="w-full flex justify-between items-center font-semibold hover:text-primary transition-colors"
              >
                {item.title}
                {item.submenu && (
                  <HiChevronDown
                    className={`ml-1 text-sm transform transition-transform ${
                      openMenu === index ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>

              {/* Submenu */}
              {item.submenu && openMenu === index && (
                <ul className="ml-4 mt-2 space-y-1">
                  {item.submenu.map((sub, i) => (
                    <li key={i}>
                      <a
                        href={sub.link}
                        className="block px-2 py-1 rounded-md hover:bg-primary hover:text-dark transition-colors"
                      >
                        {sub.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
