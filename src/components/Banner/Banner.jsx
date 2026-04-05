import banner_bg from "../../assets/bg-hero.png";
import banner_main from "../../assets/main-hero.png";

const Banner = () => {
  return (
    <section
      style={{ backgroundImage: `url(${banner_bg})` }}
      className="bg-no-repeat bg-center bg-cover relative"
    >
      <div className="w-full max-w-11/12 mx-auto min-h-dvh flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-0 pt-20 overflow-hidden border">
        {/* Banner left */}
        <div className="md:flex-1 order-2 md:order-1 flex flex-col gap-8">
          {/* Banner badge */}
          <div className="flex gap-2 bg-gray-100/20 text-gray-50 text-sm font-semibold tracking-wider border border-gray-300/50 w-fit px-4 py-2 rounded-full">
            <span>🚀</span>
            <span>GROW YOUR BUSINESS WITH US</span>
          </div>

          {/* Banner title */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-50">
            Elevate Your Brand With Innovation
          </h1>

          {/* Banner description */}
          <p className="text-gray-50">
            We craft modern digital strategies that transform businesses. <br />
            Partner with us to unlock your full potential.
          </p>

          {/* Banner buttons */}
          <div className="flex gap-4">
            {/* Banner primary button */}
            <button className="bg-gray-100 text-purple-600 font-bold px-4 md:px-8 py-3 rounded-full shadow-md cursor-pointer transition-all duration-300 hover:-translate-y-0.5">
              Discover More
            </button>

            {/* Banner secondary button */}
            <button className="bg-gray-100/20 text-gray-50 border-2 border-gray-300/50 font-bold px-4 md:px-8 py-3 rounded-full shadow-md cursor-pointer transition-all duration-300 hover:-translate-y-0.5">
              Our Process
            </button>
          </div>
        </div>

        {/* Banner right */}
        <div className="md:flex-1 order-1 md:order-2 flex justify-center items-center">
          <div>
            <img
              src={banner_main}
              alt="Banner image"
              className="rounded-lg opacity-85"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
