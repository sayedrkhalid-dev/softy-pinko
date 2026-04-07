import bg from "../../assets/bg-hero.png";
import { FaCheck as Check } from "react-icons/fa6";

const Pricing = ({ pricing }) => {
  return (
    <section
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-no-repeat bg-center bg-cover"
    >
      <div className="w-full max-w-11/12 mx-auto py-16">
        <h1 className="text-gray-50 text-2xl md:text-3xl font-bold text-center md:px-30">
          Flexible Pricing Plans
        </h1>
        <p className="text-gray-300 text-center md:px-30 py-4">
          SChoose the plan that fits your business needs perfectly.
        </p>

        <div className="flex items-center justify-center mt-8">
          <ul className="flex gap-6 items-center justify-center flex-wrap">
            {pricing.map((price) => (
              <li
                key={price.id}
                className="card flex-none w-full sm:w-64 md:w-72 bg-gray-100 shadow-sm relative rounded-2xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                {/* Card body */}
                <div className="card-body">
                  {/* Card badge */}
                  {price.isPopular && (
                    <span
                      className="absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%]
                    w-fit mx-auto lg:mx-0 px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold uppercase tracking-wider border border-purple-200 shadow-sm"
                    >
                      Most Popular
                    </span>
                  )}

                  {/* Name, price and billing-cycle */}
                  <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-bold">{price.name}</h2>
                    <span className="text-xl">
                      ${price.price}/{price.billingCycle}
                    </span>
                  </div>

                  <ul className="mt-6 flex flex-col gap-2 text-xs">
                    {price.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <Check />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="w-full mt-6 mx-auto">
                    <button className="w-full btn border-0 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-full py-2 shadow transition-all  duration-300 hover:-translate-y-0.5 hover:shadow-md">
                      Get Started
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
