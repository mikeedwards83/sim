import { CheckMark } from "../components/Checkmark"

export const Aims = () => {
    return (
        <div className="items-center  max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
            <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 id="aims" className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Project Aims
                </h2>
                <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                    <li className="flex space-x-3">

                       <CheckMark />
                        <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                            Make service health information discoverable.
                        </span>
                    </li>
                    <li className="flex space-x-3">

                       <CheckMark />
                        <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                            Make it machine readable.
                        </span>
                    </li>
                    <li className="flex space-x-3">

                       <CheckMark />
                        <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                            Standardise the industry.
                        </span>
                    </li>
                    <li className="flex space-x-3">

                       <CheckMark />
                        <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                            Allow for the easy creation of dashboards and aggregators.
                        </span>
                    </li>
                    <li className="flex space-x-3">

                       <CheckMark />
                        <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                            Reduce the time it takes for IT teams to find faults and mitigate issues.
                        </span>
                    </li>
                    <li className="flex space-x-3">

                       <CheckMark />
                        <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                            Improve the health of the internet.
                        </span>
                    </li>
                </ul>

            </div>
        </div>)
}