import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { CgMenuLeft as MenuIcon } from "react-icons/cg";

const Navbar = ({ items }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  });

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ${scrolled ? "bg-gray-100 shadow-md" : "bg-transparent"}`}
    >
      {/* Navbar content */}
      <div className="navbar w-full max-w-11/12 mx-auto h-18">
        {/* Navbar start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden p-2 bg-purple-100 border-purple-300 rounded-lg transition-all duration-300 hover:bg-purple-200"
            >
              <MenuIcon size={24} className="text-purple-600" />
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow border"
            >
              {items.map((item) => (
                <li
                  key={item.id}
                  className="text-purple-800 text-base font-semibold capitalize select-none cursor-pointer transition-all ease-in-out duration-300 hover:text-pink-500"
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Logo */}
          <a href="3" className="w-40 select-none">
            <img src={logo} alt="Logo" className="object-contain" />
          </a>
        </div>

        {/* Navbar center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-8">
            {items.map((item) => (
              <li
                key={item.id}
                className={`${scrolled ? "text-purple-800" : "text-gray-50"} text-base font-semibold capitalize select-none cursor-pointer transition-all ease-in-out duration-300 hover:text-pink-500`}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Navbar end */}
        <div className="navbar-end">
          <button className="btn border-0 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-full px-6 py-2 shadow transition-all  duration-300 hover:-translate-y-0.5 hover:shadow-md">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
