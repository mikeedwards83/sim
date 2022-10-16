export const What = () => {


    return (
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                <h2  className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">What is SIM?
                </h2>
                <p className="mb-8 font-light lg:text-xl">
                    SIM is a simple JSON standard that defines how cloud service providers should expose information
                    about the health of their services.
                </p>

                <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                    <li className="flex space-x-3">

                        <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                            <strong>Status</strong> - The current operational state of the services. For example is
                            it operating normally or are service impared.
                        </span>
                    </li>
                    <li className="flex space-x-3">

                        <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                            <strong>Incidents</strong> - Details and updates of any incidents affect the services.
                            Keeping your customers updated in near realtime.
                        </span>
                    </li>
                    <li className="flex space-x-3">

                        <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                            <strong>Maintenance</strong> - Let your customers know ahead of time about known outages
                            and at risk events.
                        </span>
                    </li>
                </ul>
                <p className="mb-8 font-light lg:text-xl">
                    By making this information machine readable and discoverable means we can build better and more robust systems.
                </p>
            </div>
            <img className="w-full mb-4 rounded-lg lg:mb-0 lg:flex" src="/feature-3.png"
                alt="dashboard feature image" />
        </div>



    )
}