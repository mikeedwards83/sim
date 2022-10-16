import { Card } from "flowbite-react"

export const YourSupport = () => {


    return (
        <div >
            <div className="items-center  max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
                <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2  className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">How Can You Help?
                    </h2>
                    <p className="mb-8 font-light lg:text-xl">
                        We need <strong>your</strong> help to make this initiative work
                    </p>

                </div>
            </div>
            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 mb-20">
                <Card imgSrc="/HelpBanner-01.png">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Cloud Service Providers
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        We need you to implement the SIM spec and start sharing the
                        health of your services.
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Tell us and we can add you to the list of companies backing
                        SIM.
                    </p>
                </Card>
                <Card imgSrc="/HelpBanner-02.png">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        IT Professionals
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Provide your feedback on the SIM Spec. What would you like to see?
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Talk with other professionals in the industry and spread awareness of SIM. Together
                        we can make our jobs easier.
                    </p>
                </Card>
                <Card imgSrc="/HelpBanner-03.png">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Cloud Customers
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Contact your service providers and ask them to implement a SIM endpoint.
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Build you own dashboards and push for change.
                    </p>
                </Card>

            </div>

           
        </div>




    )

}