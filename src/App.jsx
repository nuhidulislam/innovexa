import AboutUs from "./components/AboutUs";
import AskQuestions from "./components/AskQuestions";

import Banner from "./components/Banner";
import BannerProfile from "./components/BannerProfile";
import ContactUs from "./components/ContactUs";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import OurExperience from "./components/OurExperience";
import OurServices from "./components/OurServices";
import OurTeam from "./components/OurTeam";
import OurWorks from "./components/OurWorks";
import Price from "./components/Price";
import Testimonial from "./components/Testimonial";
import WebSolution from "./components/WebSolution";
import WhyChoose from "./components/WhyChoose";

function App() {
  return (
    <div className="w-full h-full ">
      <Navbar></Navbar>
      <Banner></Banner>
      <BannerProfile></BannerProfile>
      <AboutUs></AboutUs>
      <FeatureSection></FeatureSection>
      <WhyChoose></WhyChoose>
      <OurServices></OurServices>
      <OurExperience></OurExperience>
      <OurWorks></OurWorks>
      <OurTeam></OurTeam>
      <Testimonial></Testimonial>
      <Price></Price>
      <AskQuestions></AskQuestions>
      <WebSolution></WebSolution>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
