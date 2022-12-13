import { Navbar } from "flowbite-react";

export const PageHeader = () => {
  return (
    <div className="fixed w-screen bg-white " style={{ zIndex: 1000 }}>
      <div className="grid  max-w-screen-xl px-4  mx-auto ">
        <nav className="border-gray-200 bg-white px-2 py-2.5   sm:px-4">
          <div className="mx-auto flex flex-wrap items-center justify-between">
            <a href="/" className="flex items-center">
              <img
                src="/simlogo.svg"
                className="mr-3 h-6 sm:h-9"
                alt="SIM Logo"
              />
              <span className="hidden lg:block self-center whitespace-nowrap text-xl font-semibold ">
                Status, Incident and Maintenance (SIM) Standard
              </span>
              <span className="lg:hidden self-center whitespace-nowrap text-xl font-semibold ">
                SIM Standard
              </span>
            </a>
            <button
              className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200    md:hidden"
              data-testid="flowbite-navbar-toggle"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 12 16"
                className="h-6 w-6 shrink-0"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"
                ></path>
              </svg>
            </button>
            <div
              className="w-full md:block md:w-auto hidden"
              data-testid="flowbite-navbar-collapse"
            >
              <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
                <li>
                  <a
                    href="#what"
                    className="block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-50     md:border-0 md:hover:bg-transparent md:hover:text-blue-700  md:"
                  >
                    What?
                  </a>
                </li>
                <li>
                  <a
                    href="#why"
                    className="block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-50     md:border-0 md:hover:bg-transparent md:hover:text-blue-700  md:"
                  >
                    Why?
                  </a>
                </li>
                <li>
                  <a
                    href="#spec"
                    className="block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-50     md:border-0 md:hover:bg-transparent md:hover:text-blue-700  md:"
                  >
                    The Spec
                  </a>
                </li>
                <li>
                  <a
                    href="#try"
                    className="block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-50     md:border-0 md:hover:bg-transparent md:hover:text-blue-700  md:"
                  >
                    Try It
                  </a>
                </li>
                <li>
                  <a
                    href="#support"
                    className="block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-50     md:border-0 md:hover:bg-transparent md:hover:text-blue-700  md:"
                  >
                    Help
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
