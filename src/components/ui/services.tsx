import { services } from "../../components/constant";

export default function Services() {
  return (
    <section id="services" className="overflow-hidden bg-gray-100">
      <div className="max-w-7xl mx-auto md:px-6 px-4 py-24">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-widest text-purple-600 text-sm font-semibold">
            Our Services
          </p>

          <h2 className="md:text-4xl text-2xl font-medium text-gray-900 mt-4">
            Strategic Financial Solutions
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Comprehensive services designed to protect, grow, and position your
            financial future for long-term success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md 
                transition-all duration-300 
                hover:shadow-2xl hover:scale-105 
                cursor-pointer text-center"
              >
                {/* Icon - Now Centered */}
                <div
                  className="w-14 h-14 mx-auto flex items-center justify-center 
                  rounded-full bg-purple-600 text-white text-2xl mb-6"
                >
                  {Icon && <Icon />}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
