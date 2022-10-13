import { IAttribute } from "../interfaces/IAttribute";
import { IDefinition } from "../interfaces/IDefinition";
import { exampleIncident, exampleLocation, exampleMaintenance, exampleRoot, exampleService, exampleSupport, exampleUpdate } from "./Example";

export const definitionRoot: IDefinition = {
    name: "Root Object",
    description: <p>
        The root object returned by the status endpoint.
    </p>,
    example: exampleRoot,
    attributes: [
        {
            title: "services",
            required: true,
            type: "Service Object[]",
            description: "A list of services that can be monitored.",
        },
        {
            title: "incidents",
            required: true,
            type: "Incident Object[]",
            description: "A list of ongoing or historic incidents.",
        },
        {
            title: "maintenance",
            required: true,
            type: "Maintenance Object[]",
            description: "A list of planned or historic maintenance.",
        }
    ]
}
export const definitionService: IDefinition = {
    name: "Service Object",
    description: <p>
        The Service object contains the health status of service or system. For geo-located services
        an optional location property can be added.
    </p>,
    example: exampleService,
    attributes: [
        {
            title: "id",
            required: true,
            type: "string",
            description: "Unique identifier of the service.",
            format: "Max length 10 characters"
        },
        {
            title: "name",
            required: true,
            type: "string",
            description: "The name of the service.",
            format: "Max length 100 characters"
        },
        {
            title: "date",
            required: true,
            type: "date",
            description: "The date the status was updated.",
            format: "yyyy-MM-ddTHH:mm:ssz"
        },
        {
            title: "refresh",
            required: true,
            type: "number",
            description: "The rate that this status message is updated. ",
            format: "In seconds"

        },
        {
            title: "status",
            required: true,
            type: "number",
            description: "Indicates the health status of the service or systems. ",
            format: "Accepted values: 200 - Ok, 300 - Warning, 400 - Critical"
        },
        {
            title: "location",
            type: "Location Object",
            description: "The latitude and longitude of where the service is based."
        },
        {
            title: "services",
            type: "Service Object[]",
            description: "A collection of sub-systems of the current service."
        },
    ],
}

export const definitionIncident: IDefinition = {
    name: "Incident Object",
    description: <p>
        Provides details of ongoing or historic incident. It is recommend that historic information
        is only maintained for 30 days in the feed.
    </p>,
    example: exampleIncident,
    attributes: [
        {
            title: "id",
            required: true,
            type: "string",
            description: "Unique identifier of the incident.",
            format: "Max length 10 characters"
        },
        {
            title: "opened",
            required: true,
            type: "date",
            description: "The date and time that the incident started.",
            format: "yyyy-MM-ddTHH:mm:ssz"
        },
        {
            title: "closed",
            type: "date",
            description: "The date and time that the incident was resolved. If the incident is currently ongoing do not supply this value.",
            format: "yyyy-MM-ddTHH:mm:ssz"
        },
        {
            title: "title",
            required: true,
            type: "date",
            description: "The date and time that the incident started.",
            format: "Max Length 100 characters"
        },
        {
            title: "refresh",
            required: true,
            type: "number",
            description: "The rate that this incident message is updated.",
            format: "In seconds"

        },
        {
            title: "services",
            required: true,
            type: "string[]",
            description: "The IDs of the services affected. Where all sub-systems of a services are affected only list the top level service."
        },
        {
            title: "updates",
            required: true,
            type: "Updates Object[]",
            description: "A list of updates about the status and resolution of the incident."
        },
        {
            title: "support",
            type: "Support Object",
            description: "Provides ways for a customer to access more information."
        },
    ],
}


export const definitionMaintenance: IDefinition = {
    name: "Maintenance Object",
    description: <p>
        Provides details of planner or historic maintenance windows45 . It is recommend that historic information
        is only maintained for 30 days in the feed.
    </p>,
    example: exampleMaintenance,
    attributes: [
        {
            title: "id",
            required: true,
            type: "string",
            description: "Unique identifier of the maintenance.",
            format: "Max length 10 characters"
        },
        {
            title: "start",
            required: true,
            type: "date",
            description: "The date and time that the maintenance window will start.",
            format: "yyyy-MM-ddTHH:mm:ssz"
        },
        {
            title: "finish",
            required: true,
            type: "date",
            description: "The date and time that the maintenance window will end",
            format: "yyyy-MM-ddTHH:mm:ssz"
        },
        {
            title: "title",
            required: true,
            type: "string",
            description: "A short description of the maintenance.",
            format: "Max Length 100 characters"
        },
        {
            title: "refresh",
            required: true,
            type: "number",
            description: "The rate that this maintenance message is updated.",
            format: "In seconds"

        },
        {
            title: "services",
            required: true,
            type: "string[]",
            description: "The IDs of the services affected by the maintenance. Where all sub-systems of a services are affected only list the top level service."
        },
        {
            title: "updates",
            required: true,
            type: "Updates Object[]",
            description: "A list of updates about the maintenance."
        },
        {
            title: "support",
            type: "Support Object",
            description: "Provides ways for a customer to access more information."
        },
    ]
}

export const definitionLocation: IDefinition = {
    name: "Location Object",
    description: <p>
        Provides location information.
    </p>,
    example: exampleLocation,
    attributes: [
        {
            title: "lat",
            required: true,
            type: "number",
            description: "The latitude of the location",
        },
        {
            title: "long",
            required: true,
            type: "number",
            description: "The longitude of the location",
        }
    ]
}

export const definitionUpdate: IDefinition = {
    name: "Update Object",
    description: <p>
        Contains an update message.
    </p>,
    example: exampleUpdate,
    attributes: [
        {
            title: "description",
            required: true,
            type: "string",
            description: "The details of the update.",
            format: "Markdown. Maximum 1500 characters."
        },
        {
            title: "date",
            required: true,
            type: "date",
            description: "The date and time of the update.",
            format: "yyyy-MM-ddTHH:mm:ssz"
        },
    ]
}

export const definitionSupport: IDefinition = {
    name: "Support Object",
    description: <p>
        Contains information on where a customer can find out more information.
    </p>,
    example: exampleSupport,
    attributes: [
        {
            title: "email",
            type: "string",
            description: "A support email address",
            format: "Email"
        },
        {
            title: "phone",
            type: "string",
            description: "A support telephone number",
        },
        {
            title: "url",
            type: "string",
            description: "A URL to a page with further information",
        },
    ]
}