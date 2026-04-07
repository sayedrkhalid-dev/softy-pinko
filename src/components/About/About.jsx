import bg_wave from "../../assets/bg-wave.png";
import about_main from "../../assets/about.png";
import { FaRegSquareCheck as Check } from "react-icons/fa6";

const About = ({ stats, highlights }) => {
  return (
    <section
      style={{ backgroundImage: `url(${bg_wave})` }}
      className="bg-no-repeat bg-center bg-cover relative py-16"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center">
        {/* LEFT IMAGE */}
        <div className="flex-1 flex justify-center relative">
          <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-linear-to-tr from-purple-200 to-pink-200 p-6 shadow-xl">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden">
              <img
                src={about_main}
                alt="About"
                className="w-4/5 object-contain"
              />
            </div>
          </div>

          {/* Decorative blur */}
          <div className="absolute -z-10 w-72 h-72 bg-purple-400/20 blur-3xl rounded-full"></div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 flex flex-col gap-2 text-center lg:text-left">
          {/* Badge */}
          <div className="w-fit mx-auto lg:mx-0 px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold uppercase tracking-wider border border-purple-200">
            About Us
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            We Provide the Best Services for Your Business
          </h1>

          {/* Description */}
          <div className="flex flex-col gap-3 text-gray-600 text-sm md:text-base">
            With over a decade of experience, we have helped hundreds of
            businesses achieve their digital transformation goals. Our holistic
            approach combines strategy, design, and technology. <br />
            We believe in building long-term relationships with our clients,
            understanding their unique needs and delivering tailored solutions
            that exceed expectations every time.
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {highlights.map((highlight) => (
              <div
                key={highlight.id}
                className="flex items-center gap-2 text-purple-700 font-medium bg-purple-50 px-3 py-1.5 rounded-lg border border-purple-100 shadow-sm hover:shadow-md transition"
              >
                <Check className="text-purple-500" />
                {highlight.title}
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-xl py-4 flex flex-col items-center shadow-sm hover:shadow-md transition"
              >
                <span className="text-xl md:text-2xl font-bold text-purple-700">
                  {stat.value}
                  {stat.suffix}
                </span>
                <span className="text-xs md:text-sm text-gray-500">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
