import { Carousel, Timeline } from "flowbite-react"

export const WhySlider = () => {

    return (
        <>
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 ">
                The Data Flow
            </h2>
            <div className="h-56 sm:h-90 xl:h-80 2xl:h-96">
                <Carousel
                    slideInterval={10000}
                    rightControl={<Right />}
                    leftControl={<Left />}

                >
                    <div className="gap-8 grid lg:grid-cols-2 xl:gap-16">
                        <div>
                            <h4 className="mb-2 text-xl ">1. Collect Internal Data</h4>
                            <p className="font-light text-gray-500 sm:text-xl pb-2">
                                Service Providers using existing detailed monitoring tools such as Open Telemetry, New Relic, Azure Application Insights,
                                Amazon Cloud watch and many more to monitor the internal health of their systems.
                            </p>
                        </div>
                        <img src="/why/step1.png" alt="Data collected by internal monitoring." className="h-96" />
                    </div>
                    <div className="gap-8 grid lg:grid-cols-2 xl:gap-16">
                        <div>
                            <h4 className="mb-2 text-xl ">2. SIM Endpoint</h4>
                            <p className="font-light text-gray-500 sm:text-xl pb-2">
                                Using the data collected by the internal monitoring tools, the Service Provider exposes an SIM endpoint that
                                details at a high level the health of their systems.
                            </p>
                            <p className="font-light text-gray-500 sm:text-xl pb-2">
                                The SIM Endpoint does not detail the information about the individual systems used by the service, e.g. cloud storage or
                                individual compute instances. Instead the endpoint details the health of the services provided, e.g. Card Processing, Video Encryption.
                            </p>
                            <p className="font-light text-gray-500 sm:text-xl pb-2">
                                The health of the system can be shared with additional detailed information about incidents and maintenance without exposing sensitive
                                internal information.
                            </p>
                        </div>
                        <img src="/why/step2.png" alt="Data collected by internal monitoring." className="h-96" />
                    </div>
                    <div className="gap-8 grid lg:grid-cols-2 xl:gap-16">
                        <div>
                            <h4 className="mb-2 text-xl ">3. SIM Aggregator</h4>
                            <p className="font-light text-gray-500 sm:text-xl pb-2">
                                A SIM Aggregator monitors various SIM endpoints for status changes.
                            </p>
                            <p className="font-light text-gray-500 sm:text-xl pb-2">
                                By aggregating the health status of a system from multiple SaaS providers it becomes possible
                                to determine the cloud of health of your entire ecosystem.
                            </p>
                            <p className="font-light text-gray-500 sm:text-xl pb-2">
                                An SIM Aggregator could be the same tool you are using for monitoring your internal systems, therefore
                                combining the health information of your internal systems with the health of the Cloud Services you
                                are using.
                            </p>
                        </div>
                        <img src="/why/step3.png" alt="Data collected by internal monitoring." className="h-96" />
                    </div>
                    <div className="gap-8 grid lg:grid-cols-2 xl:gap-16">
                        <div>
                            <h4 className="mb-2 text-xl ">4. Monitoring and Dashboards</h4>
                            <p className="font-light text-gray-500 sm:text-xl pb-2">
                                Monitor the health of your Cloud Service dependencies from a single location.
                            </p>
                            <p className="font-light text-gray-500 sm:text-xl pb-2">
                                Create dashboards, alerts and track historical information of the services you are dependent on.
                            </p>
                            
                        </div>
                        <img src="/why/step4.png" alt="Data collected by internal monitoring." className="h-96" />

                    </div>
                </Carousel>
            </div>

        </>
    )
}


const Right = () => {
    return (
        <button className="group" data-testid="carousel-right-control" type="button">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 border-purple-700 border-2 group-hover:bg-purple-400 group-focus:outline-none group-focus:ring-4 group-focus:ring-white  sm:h-10 sm:w-10">
                <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" className="h-5 w-5 text-purple-700  sm:h-6 sm:w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </span>
        </button>
    )
}

const Left = () => {
    return (
        <button className="group" data-testid="carousel-right-control" type="button">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 border-purple-700 border-2 group-hover:bg-purple-400 group-focus:outline-none group-focus:ring-4 group-focus:ring-white  sm:h-10 sm:w-10">
                <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" className="h-5 w-5 text-purple-700  sm:h-6 sm:w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
            </span>
        </button>
    )
}