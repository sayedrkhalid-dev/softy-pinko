import logo from "../../assets/logo.png";

const Navbar = ({ items }) => {
  return (
    <nav className="">
      {/* Navbar content */}
      <div className="navbar w-full max-w-11/12 mx-auto h-18">
        {/* Navbar start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            ></ul>
          </div>

          {/* Logo */}
          <a href="3" className="w-38">
            <img src={logo} alt="Logo" className="object-contain" />
          </a>
        </div>

        {/* Navbar center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-8">
            {items.map((item) => (
              <li
                key={item.id}
                className="text-purple-800 text-base font-semibold select-none cursor-pointer transition-all ease-in-out duration-300 hover:text-pink-500"
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
