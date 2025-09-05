import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-secondary">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-16 lg:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          {/* Left Text */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              GROW YOUR BUSINESS
            </h2>
            <h2 className="text-3xl md:text-5xl font-bold text-primary leading-tight mt-2">
              WITH DIGITAL PRESENCE
            </h2>

            {/* Social Media */}
            <div className="mt-6">
              <p className="text-lg font-semibold">LET’S CONNECT</p>
              <div className="flex space-x-6 mt-4 text-xl">
                <a href="#" className="hover:text-primary">
                  <FaFacebookF />
                </a>
                <a href="#" className="hover:text-primary">
                  <FaTwitter />
                </a>
                <a href="#" className="hover:text-primary">
                  <FaInstagram />
                </a>
                <a href="#" className="hover:text-primary">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>

          {/* Right Logo and Address */}
          <div className="flex flex-col items-start md:items-end text-left md:text-right space-y-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="bg-primary rounded-full w-10 h-10 flex items-center justify-center">
                <span className="text-black font-bold text-2xl ">IN</span>
              </div>
              <h1 className="text-4xl font-bold">Innovexa</h1>
            </div>
            <p className="text-sm font-semibold">Smart Digital Solutions</p>
            <p className="text-sm">
              548 Market St, Suite 91994 <br />
              San Francisco, CA 94104, USA
            </p>
            <p className="text-sm">hello@echodigital.com</p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-end  space-x-6 text-sm font-bold">
          <a href="#" className="text-primary">
            HOME
          </a>
          <a href="#" className="hover:text-primary">
            ABOUT
          </a>
          <a href="#" className="hover:text-primary">
            BLOG
          </a>
          <a href="#" className="hover:text-primary">
            CAREER
          </a>
          <a href="#" className="hover:text-primary">
            CONTACT
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>
            Copyright © 2025 Echo Template Kit | Designed by Pefkoport Studio
          </p>
          <a
            href="#top"
            className="mt-4 text-4xl px-5 font-bold md:mt-0 bg-primary text-black rounded-full p-2 hover:scale-110 transition"
          >
            ↑
          </a>
        </div>
      </div>
    </footer>
  );
  
}
