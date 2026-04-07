import bg from "../../assets/bg-dark.png";

const Footer = () => {
  return (
    <footer style={{ backgroundImage: `url(${bg})` }} className="">
      <div className="w-full max-w-11/12 mx-auto py-16">
        <div className="text-gray-50 flex justify-between">
          <nav className="flex flex-col">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover text-sm text-gray-300">Branding</a>
            <a className="link link-hover text-sm text-gray-300">Design</a>
            <a className="link link-hover text-sm text-gray-300">Marketing</a>
            <a className="link link-hover text-sm text-gray-300">
              Advertisement
            </a>
          </nav>
          <nav className="flex flex-col">
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover text-sm text-gray-300">About us</a>
            <a className="link link-hover text-sm text-gray-300">Contact</a>
            <a className="link link-hover text-sm text-gray-300">Jobs</a>
            <a className="link link-hover text-sm text-gray-300">Press kit</a>
          </nav>
          <nav className="flex flex-col">
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover text-sm text-gray-300">
              Terms of use
            </a>
            <a className="link link-hover text-sm text-gray-300">
              Privacy policy
            </a>
            <a className="link link-hover text-sm text-gray-300">
              Cookie policy
            </a>
          </nav>
          <form>
            <h6 className="footer-title">Contact</h6>
            <fieldset className="w-80">
              <label className="text-gray-300">Get In Touch</label>
              <div className="join rounded-md overflow-hidden">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="input input-bordered join-item text-gray-900"
                />
                <button className="btn border-0 bg-linear-to-r from-purple-600 to-pink-600 text-white py-2 shadow">
                  Send Massage
                </button>
              </div>
            </fieldset>
          </form>
        </div>

        <div className="mt-10 pt-8 border-t border-t-gray-500 text-gray-50 flex justify-between">
          <aside className="grid-flow-col items-center">
            <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
          </aside>
          <div className="flex items-center gap-2">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
