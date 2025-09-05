import { FaCheckCircle } from "react-icons/fa";

const WebSolution = () => {
  return (
    <section className="bg-bgprimary text-secondary py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side Illustration */}
        <div className="flex flex-col gap-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png"
            alt="Web Planning"
            className="w-64 mx-auto md:mx-0"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/747/747086.png"
            alt="Web Design"
            className="w-64 mx-auto md:mx-0"
          />
        </div>

        {/* Right Side Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Web Solution Expertise
          </h2>

          <div className="space-y-6">
            {/* Item 1 */}
            <div className="flex items-start gap-4">
              <FaCheckCircle className="text-primary text-2xl flex-shrink-0" />
              <div>
                <h3 className="text-xl text-primary font-semibold">Strategic Web Planning</h3>
                <p className="text-white
                ">
                  Our strategic approach to web planning ensures your online success.
                  We create customized strategies to drive traffic and engagement on
                  your website, helping you achieve your digital objectives.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-4">
              <FaCheckCircle className="text-primary text-2xl flex-shrink-0" />
              <div>
                <h3 className="text-xl text-primary font-semibold">
                  Sleek & Contemporary Web Design
                </h3>
                <p className="text-white">
                  We&apos;re dedicated to crafting sleek and contemporary web designs
                  that make a powerful impact. Our designs not only look great but
                  also enhance user experiences, keeping your audience engaged.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-4">
              <FaCheckCircle className="text-primary text-2xl flex-shrink-0" />
              <div>
                <h3 className="text-xl text-primary font-semibold">Effective Web Marketing</h3>
                <p className="text-white">
                  Our web marketing expertise extends to effective online campaigns,
                  including coupon marketing. We help you easily publish and promote
                  your coupons, ensuring they resonate with your target audience and
                  drive results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebSolution;
