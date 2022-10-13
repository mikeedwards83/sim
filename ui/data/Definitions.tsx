import { IAttribute } from "../interfaces/IAttribute";
import { IDefinition } from "../interfaces/IDefinition";
import { exampleIncident, exampleService } from "./Example";

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
            description: "The rate that this status message is updated. In seconds."
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
            type: "object",
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
            description: "The rate that this status message is updated. In seconds."
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
            required: true,
            type: "Support Object",
            description: "The IDs of the services affected. Where all sub-systems of a services are affected only list the top level service."
        },
    ],
}
