import bg_wave from "../../assets/bg-wave.png";

const Services = ({ services }) => {
  return (
    <section
      style={{ backgroundImage: `url(${bg_wave})` }}
      className="bg-no-repeat bg-center bg-cover"
    >
      <div className="w-full max-w-11/12 mx-auto py-16 flex flex-col items-center text-center gap-6">
        <h1 className="text-2xl md:text-3xl font-bold">
          We provide the best strategy to grow up your business
        </h1>
        <p className="text-gray-600">
          Softy Pinko is a professional Bootstrap 4.0 theme designed by Template
          Mo for your company at absolutely free of charge.
        </p>

        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <li
              key={service.id}
              className="card border border-purple-300 shadow-md shadow-purple-200 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="card-body items-center text-center">
                {/* Service image */}
                <div className="w-32 h-32 bg-purple-100 border border-purple-300 p-6 rounded-full">
                  <img src={service.img} />
                </div>
                {/* Service title */}
                <h1 className="text-xl font-bold text-purple-800">
                  {service.title}
                </h1>

                {/* Service description */}
                <p className="text-gray-500">{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
