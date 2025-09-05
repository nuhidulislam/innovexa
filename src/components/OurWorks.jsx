// src/components/OurWorks.jsx

const worksData = [
  {
    id: 1,
    title: "SOCIAL MEDIA CAMPAIGN FOR VELOCITY BIKES",
    description:
      "VeloCity Bikes is a local bicycle retailer expanding into online sales. They wanted a campaign to promote their new range of urban commuter bikes.",
    tags: ["Social Media", "Velocity Bikers"],
    image:
      "https://images.unsplash.com/photo-1587574293443-9138b64f8b5b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "REBRANDING & WEBSITE OVERHAUL FOR NOMAD TRAVELS",
    description:
      "Nomad Travels is a boutique travel agency specializing in personalized adventure tours. They wanted a fresh, modern identity to reflect their premium service and attract younger travelers.",
    tags: ["Branding", "Nomad Travels"],
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "E-COMMERCE GROWTH STRATEGY FOR FRESHMART",
    description:
      "FreshMart is an organic grocery store. We designed an e-commerce strategy to boost online orders and customer retention.",
    tags: ["E-Commerce", "FreshMart"],
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "DIGITAL ADVERTISING CAMPAIGN FOR TECHSPHERE",
    description:
      "TechSphere, a rising electronics brand, needed a targeted advertising campaign to drive awareness and sales for their new product line.",
    tags: ["Digital Ads", "TechSphere"],
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=600&q=80",
  },
];

const OurWorks = () => {
  return (
    <section className="bg-bgthird py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-lg py-2 px-4 font-semibold bg-dark text-secondary  rounded-full">Our Works</span>
          <h2 className="mt-7 text-4xl md:text-5xl font-bold text-primary">
            A Curated Selection of Our Best Projects
          </h2>
          <p className="text-4xl md:text-5xl font-bold text-dark mt-2">
            Designed to Perform, Built to Impress.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {worksData.map((work) => (
            <div
              key={work.id}
              className="bg-secondary p-1 hover:bg-primary rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <img
                src={work.image}
                alt={work.title}
                className="w-full rounded-lg h-56 object-cover md:h-64"
              />
              <div className="p-6">
                <h3 className="font-bold text-dark text-3xl mb-2">
                  {work.title}
                </h3>
                <p className="text-dark text-lg my-4 mb-4">
                  {work.description}
                </p>
                <div className="inline-block bg-green-500 text-dark text-lg font-semibold px-3 py-1 rounded-full">
                  {work.tags.join(", ")}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWorks;
