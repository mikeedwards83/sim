export const Why = () => {

    return (
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src="/feature-2.png"
                alt="feature image 2" />
            <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                    Why SIM?
                </h2>
                <p className="mb-8 font-light lg:text-xl">
                    A <strong>challenge</strong> for any IT department is monitoring the health of the critical
                    business system that
                    their company relies on. The move
                    SaaS, PaaS and IaaS services may have remove the need to monitor hardware but now we need to
                    monitor the health of these services.
                </p>
                <p className="mb-8 font-light lg:text-xl">
                    Service provides vary greatly in their maturity to provide information about the health of their
                    systems. Some
                    services provide status pages (e.g <a href="https://status.azure.com/en-gb/status">Azure</a>) to
                    expose the health of their systems, some send out emails when
                    they experience and incident, and some companies send out maintenance emails and others don't.
                </p>
                <p className="mb-8 font-light lg:text-xl">
                    SIM aims to remove the adhoc approach to Cloud monitoring and create a single standard that can
                    be easily
                    shared and consumed. Making the it easier for IT departments to see and understand how their
                    systems are affected.
                </p>

                <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                    <li className="flex space-x-3">

                        <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                            Make service health information discoverable
                        </span>
                    </li>
                    <li className="flex space-x-3">

                        <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                            Make it machine readable
                        </span>
                    </li>
                    <li className="flex space-x-3">

                        <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                            Standardise the industry
                        </span>
                    </li>
                    <li className="flex space-x-3">

                        <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                            Allow for the easy creation of dashboards and aggregators
                        </span>
                    </li>
                    <li className="flex space-x-3">

                        <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                            Reduce the time it takes for IT teams to find faults and mitigate issues
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
}