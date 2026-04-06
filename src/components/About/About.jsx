import bg_wave from "../../assets/bg-wave.png";
import about_main from "../../assets/about.png";
import { FaRegSquareCheck } from "react-icons/fa6";

const About = ({ about }) => {
  return (
    <section
      style={{ backgroundImage: `url(${bg_wave})` }}
      className="bg-no-repeat bg-center bg-cover relative py-24"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
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
        <div className="flex-1 flex flex-col gap-6 text-center lg:text-left">
          {/* Badge */}
          <div className="w-fit mx-auto lg:mx-0 px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold uppercase tracking-wider border border-purple-200">
            {about.content.badge}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            {about.content.title}
          </h1>

          {/* Description */}
          <div className="flex flex-col gap-3 text-gray-600 text-sm md:text-base">
            {about.content.paragraphs.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {about.highlights.map((highlight) => (
              <div
                key={highlight.id}
                className="flex items-center gap-2 text-purple-700 font-medium bg-purple-50 px-3 py-1.5 rounded-lg border border-purple-100"
              >
                <FaRegSquareCheck className="text-purple-500" />
                {highlight.title}
              </div>
            ))}
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4 mt-4">
            {about.metrics.map((stat) => (
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
