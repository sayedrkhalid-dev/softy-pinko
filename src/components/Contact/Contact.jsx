import bg from "../../assets/bg-wave.png";
import { FaArrowRightLong as RightArrow } from "react-icons/fa6";
import { FaRegAddressCard as Address } from "react-icons/fa";
import { MdOutlineMailOutline as Email } from "react-icons/md";
import { MdOutlinePhoneInTalk as Phone } from "react-icons/md";

const Contact = ({ contacts }) => {
  return (
    <section
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-no-repeat bg-center bg-cover relative"
    >
      <div className="w-full max-w-11/12 mx-auto min-h-dvh flex flex-col md:flex-row md:justify-between md:items-center gap-10 py-16 overflow-hidden">
        {/* Contact left */}
        <div className="flex-1 flex flex-col gap-2">
          {/* Contact title */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Get In Touch
          </h1>

          {/* Contact description */}
          <p className="text-sm text-gray-500">
            Ready to transform your business? We'd love to hear from you. Send
            us a message and we'll get back to you as soon as possible.
          </p>

          {/* Contact info */}
          <ul className="flex flex-col gap-4 mt-8">
            {contacts.map((contact) => (
              <li key={contact.id} className="flex items-center gap-2">
                <span className="bg-gray-100 border border-gray-300 p-4 rounded-full">
                  {contact.type === "Address" ? (
                    <Address size={32} />
                  ) : contact.type === "Email" ? (
                    <Email size={32} />
                  ) : (
                    <Phone size={32} />
                  )}
                </span>
                <div>
                  <h1 className="font-semibold">{contact.type}</h1>
                  <p className="text-sm text-gray-700">{contact.value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact right */}
        <div className="flex-1 flex flex-col justify-center items-center gap-4 p-6 bg-white border border-gray-100 shadow-md  rounded-2xl">
          <fieldset className="w-full flex flex-col gap-4">
            <div className="flex gap-4">
              <input
                type="text"
                className="input w-full text-base py-6 rounded-md"
                placeholder="Your Name"
              />

              <input
                type="email"
                className="input w-full text-base py-6 rounded-md"
                placeholder="Your Email"
              />
            </div>

            <input
              type="text"
              className="input w-full text-base py-6 rounded-md"
              placeholder="Subject"
            />

            <textarea
              className="textarea w-full text-base pb-16 rounded-md"
              placeholder="Your Massage"
            ></textarea>

            <button className="mt-6 w-full btn border-0 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-full py-6 shadow transition-all  duration-300 hover:-translate-y-0.5 hover:shadow-md">
              Send Massage
              <RightArrow />
            </button>
          </fieldset>
        </div>
      </div>
    </section>
  );
};

export default Contact;
