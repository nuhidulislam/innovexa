// src/components/BannerProfile.jsx

const BannerProfile = () => {
  // ফেক ডাটা এখানে
  const clientsData = {
    image:
      "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1200&q=80",
    satisfiedCount: 100,
    description:
      "More than 100 clients have collaborated with us and are satisfied with our services.",
    avatars: [
      "https://randomuser.me/api/portraits/men/32.jpg",
      "https://randomuser.me/api/portraits/women/44.jpg",
      "https://randomuser.me/api/portraits/men/55.jpg",
      "https://randomuser.me/api/portraits/women/66.jpg",
    ],
  };

  return (
    <section className="bg-bgprimary pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Main Image */}
          <img
            src={clientsData.image}
            alt="Team discussion"
            className="w-full h-[450px] md:h-[550px] object-cover rounded-2xl"
          />

          {/* Overlay Card */}
          <div className="absolute bottom-6 left-6 bg-secondary shadow-lg rounded-2xl p-6 max-w-sm">
            <div className="flex items-center gap-4">
              {/* Avatars */}
              <div className="flex -space-x-3">
                {clientsData.avatars.map((avatar, idx) => (
                  <img
                    key={idx}
                    src={avatar}
                    alt={`client-${idx}`}
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>

              {/* Count */}
              <div>
                <h3 className="text-4xl font-bold text-dark">
                  {clientsData.satisfiedCount}+
                </h3>
                <p className="text-lg font-semibold text-dark">Satisfied Clients</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-dark text-sm mt-4">{clientsData.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerProfile;
