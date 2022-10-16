import { exampleJson, exampleService } from "../data/Example"

import { Alert, Avatar, Tabs } from "flowbite-react";
import { Code } from "../components/Code";
import { Definition } from "../components/Definition";
import { definitionIncident, definitionLocation, definitionMaintenance, definitionProvider, definitionRoot, definitionService, definitionSupport, definitionUpdate } from "../data/Definitions";
import { DocumentIcon, CodeBracketIcon, ShieldExclamationIcon, FireIcon } from '@heroicons/react/24/solid'


export const Spec = () => {

    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div
                    className="items-center max-w-screen-xl px-4 py-8 mx-auto ">
                    <div className="col-span-2 mb-8">
                        <p className="text-lg font-medium text-purple-600 dark:text-purple-500">v0.1</p>
                        <h2  className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
                            The Spec 
                        </h2>
                        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400 pb-2">
                            The SIM Standard defines a JSON structure which describes the <strong>Status</strong> of services,
                            a list of <strong>Incidents</strong> and any planned <strong>Maintenance</strong>.
                        </p>
                        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400 pb-2">
                            The JSON specification is deliberately simple to make it easy for development teams to implement and consume.
                            The aim is to create a specification that describes neccessary information and does not get swampped with
                            details.
                        </p>
                        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400 pb-2">
                            We are still working on the current specification and want <strong>your feedback</strong>!
                        </p>
                        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400 pb-2">
                            If you have any suggestion contact via <a href="https://twitter.com/mike_treestacks" className="text-purple-600 hover:text-purple-800 ">
                                @mike_treestacks</a> on twitter.
                            Twitter
                        </p>
                        
                    </div>
                    
                </div>
            </section>

            <section className="bg-gray-50 dark:bg-gray-800">
                <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
                    <div>
                        <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">Version 0.1</h2>
                        <h4 className="mb-2 text-xl dark:text-white m-0 ">Updated: 15 October 2022</h4>
                    </div>
                    <Tabs.Group
                        aria-label="Pills"
                        style="default"
                    >
                        <Tabs.Item
                            icon={DocumentIcon}
                            active={true} title="Documentation">
                            <Docs />
                        </Tabs.Item>
                        <Tabs.Item
                            icon={CodeBracketIcon}
                            title="Example"
                        >
                            <Example />
                        </Tabs.Item>

                    </Tabs.Group>
                </div>
            </section>
        </>
    )


}


const Example = () => {


    return (

        <div className=" mb-8">
            <Code object={exampleJson} title={<><strong>GET:</strong>/status</>} />
        </div>
    )
}


const Docs = () => {
    return (
        <>
            <Definition definition={definitionRoot} />
            <hr className="my-10 border-2" />
            <Definition definition={definitionProvider} />
            <hr className="my-10 border-2" />
            <Definition definition={definitionService} />
            <hr className="my-10 border-2" />
            <Definition definition={definitionIncident} className="" />
            <hr className="my-10 border-2" />
            <Definition definition={definitionMaintenance} className="" />

            <hr className="my-10 border-2" />
            <Definition definition={definitionLocation} className="" />
            <hr className="my-10 border-2" />
            <Definition definition={definitionUpdate} className="" />
            <hr className="my-10 border-2" />
            <Definition definition={definitionSupport} className="" />
        </>
    )
}

