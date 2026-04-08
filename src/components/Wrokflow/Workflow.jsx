import workflow_bg from "../../assets/bg-workflow.png";
import Reveal from "../../hooks/Reveal";

const Workflow = ({ workflow }) => {
  return (
    <section
      style={{ backgroundImage: `url(${workflow_bg})` }}
      className="bg-no-repeat bg-center bg-cover"
    >
      <div className="w-full max-w-6xl mx-auto py-20 px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our Workflow
          </h2>
          <p className="text-gray-300 mt-2">
            A simple and effective process to deliver great results
          </p>
        </div>

        {/* Workflow Steps Container */}
        <div className="flex justify-center">
          <ul className="flex flex-wrap justify-center gap-6">
            {workflow.map((step, index) => (
              <Reveal
                direction="down"
                delay={index * 80}
                key={step.id}
                className="flex-none w-26 md:w-32 p-2"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Icon Container */}
                  <div className="flex items-center justify-center p-4 rounded-full bg-gray-100 backdrop-blur-md border border-gray-300 shadow-lg mb-4">
                    <img
                      src={step.img}
                      alt={step.title}
                      className="w-10 h-10 object-contain transition-all duration-300 hover:scale-110"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-gray-50 font-semibold text-base">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="hidden sm:block text-gray-300 text-sm leading-relaxed mt-2">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
