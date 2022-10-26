import { Tabs } from "flowbite-react"

export const Alternatives = () => {


    return (
        <div className="gap-8 grid lg:grid-cols-2 xl:gap-16">
            <div>
                <h2 id="supporters" className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 ">
                    The Alternatives
                </h2>
                <p className="font-normal text-gray-700 sm:text-xl pb-2">
                    Where does the SIM Standard sit within the ecosystem and what alternatives are there already?
                </p>
                <p className="font-light text-gray-500   pb-2">
                    If there are other alternatives that you think we should compare to please contact us.
                </p>
            </div>
            <Tabs.Group
                aria-label="Pills"
                style="pills"
            >
                <Tabs.Item
                    active={true}
                    title="Open Telemetry"
                >
                    <p className="font-light text-gray-500   pb-2">
                        <img src="/opentelemetry-horizontal-color.svg" className="w-1/3 m-2 float-right" alt="Opent Telemetry Logo" />
                        The SIM Standard is not a replacement or competitor for Open Telemetry (OT), each has different aims and operates at different levels within your ecosystem.
                    </p>
                    <p className="font-light text-gray-500   pb-2">
                        OT is a collection of tools for collecting very detailed information about the status of the systems you are running, providing you with information on Logs, Tracing, Metrics. This is very detailed system level information, containing all the information that a team operating a service needs to understand to support and maintain the service they are running. It allows teams to chase down errors and issues in the services they provide.
                    </p>
                    <p className="font-light text-gray-500   pb-2">
                        SIM is not designed to operate at this detailed level, instead operates at the level above by providing a general overview of the health of the whole service that can be shared publicly. Data capture by OT often should not be exposed publicly since it may contain sensitive data. Instead this data can be aggregated to provide a general overview of the service status that can be shared publicly via SIM.
                    </p>
                    <p className="font-light text-gray-500   pb-2">
                        In this way SIM complements OT by creating a standard that can be used to generalise the information from OT to a format that can be shared with a service provider's customer base.
                    </p>
                </Tabs.Item>
                <Tabs.Item title="Atlassian Status Page
">
                    <p className="font-light text-gray-500   pb-2">
                        <img src="/Statuspage-blue.svg" className="w-1/3 m-2 float-right" alt="Opent Telemetry Logo" />
                        The SIM Standard is similar to the Atlassian Statuspage product, both aim to expose the health of the services being monitored in an easy to read form. Statuspage covers incidents, component health and metrics.
                    </p>
                    <p className="font-light text-gray-500   pb-2">
                        SIM differs in several ways. Firstly SIM tries to create a simple standard that all providers can use rather than it being a proprietary format. The SIM standard is also simpler, combining many elements into a single page request and reducing the amount of information that needs to be shared.
                    </p>
                </Tabs.Item>

            </Tabs.Group>
        </div>
    )
}