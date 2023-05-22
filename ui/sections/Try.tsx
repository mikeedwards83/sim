import {
    Avatar,
    Badge,
    Button,
    Label,
    Table,
    Tabs,
    TextInput,
} from "flowbite-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { IDefinition } from "../interfaces/IDefinition";
import {
    HeartIcon,
    BoltIcon,
    WrenchIcon,
    DocumentIcon,
    CodeBracketIcon,
    CloudArrowDownIcon,
    ShieldCheckIcon,
    ShieldExclamationIcon,
    FireIcon,
} from "@heroicons/react/24/solid";
import { Code } from "../components/Code";
import { IService } from "../interfaces/IService";
import { DateFormatted } from "../components/DateFormatted";
import { IRoot } from "../interfaces/IRoot";
import { IIncident } from "../interfaces/IIncident";
import { IUpdate } from "../interfaces/IUpdate";
import { IMaintenance } from "../interfaces/IMaintenance";
import { ISupport } from "../interfaces/ISupport";
import { IProvider } from "../interfaces/IProvider";

export const Try = () => {
    const [url, setUrl] = useState<string | undefined>();

    const urlRef = useRef<HTMLInputElement>(null);

    const load = () => {
        if (urlRef.current) {
            setUrl(urlRef.current.value);
        } else {
            setUrl(undefined);
        }
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        load();
    };

    const setExample = (example: string) => {
        if (urlRef.current) {
            switch (example) {
                case "good":
                    urlRef.current.value = "/api/example/good";
                    break;
                case "bad":
                    urlRef.current.value = "/api/example/mixed";
                    break;
            }

            load();
        }
    };
    return (
        <div>
            <div className="text-gray-500 sm:text-lg  pb-8">
                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 ">
                    Give It A Try
                </h2>
                <p className="font-light text-gray-500  pb-2">
                    Try out the spec yourself by using one of our examples of
                    pointing it at your own implementation.
                </p>
                <form onSubmit={onSubmit}>
                    <div className="flex gap-4 items-center">
                        <div className="mb-2 flex-shrink ">
                            <Label htmlFor="url" value="Status URL" />
                        </div>
                        <div className="flex-grow">
                            <TextInput
                                id="url"
                                type="text"
                                placeholder="/api/example/good"
                                required={true}
                                shadow={true}
                                ref={urlRef}
                            />
                        </div>
                        <div className="flex-shrink">
                            <Button onClick={() => load()}>
                                <CloudArrowDownIcon className="w-5 mr-3" />
                                Load
                            </Button>
                        </div>
                    </div>
                </form>
                <div>
                    <div className="flex h-full flex-col justify-center gap-4 p-6">
                        <h4 className="mb-2 text-xl ">Examples</h4>
                        <Button.Group>
                            <Button
                                color="info"
                                onClick={() => setExample("good")}
                            >
                                👍 All Good
                            </Button>
                            <Button
                                color="info"
                                onClick={() => setExample("bad")}
                            >
                                👎Not Great
                            </Button>
                        </Button.Group>
                    </div>
                </div>
            </div>

            {url && <EndpointTest url={url} />}
        </div>
    );
};

export const EndpointTest = (props: { url: string }) => {
    const { url } = props;

    const [data, setData] = useState<IRoot | undefined>();

    const [status, setStatus] = useState<Number>(100);

    useEffect(() => {
        setData(undefined);
        setStatus(100);

        fetch(url)
            .then((res) => {
                setStatus(res.status);
                // if (res.status === 200) {
                res.json().then((data) => {
                    setData(data);
                });
                //}
            })
            .catch(() => {
                setStatus(500);
            });
    }, [url]);

    return (
        <>
            {data && (
                <div>
                    <hr className="pb-4" />
                    <div className="pb-4">
                        <Provider provider={data.provider} />
                    </div>
                    <Tabs.Group aria-label="Pills" style="default">
                        <Tabs.Item
                            icon={HeartIcon as any}
                            active={true}
                            title="Status"
                        >
                            <StatusDashboard services={data.services} />
                        </Tabs.Item>
                        <Tabs.Item icon={BoltIcon as any} title="Incident">
                            <IncidentsDashboard incidents={data.incidents} />
                        </Tabs.Item>
                        <Tabs.Item icon={WrenchIcon as any} title="Maintenance">
                            <MaintenancesDashboard
                                maintenances={data.maintenance}
                            />
                        </Tabs.Item>
                        <Tabs.Item icon={CodeBracketIcon as any} title="Json">
                            <Code
                                object={data}
                                title={`GET:${url}`}
                                capitialise={false}
                            />
                        </Tabs.Item>
                    </Tabs.Group>
                </div>
            )}
        </>
    );
};

const StatusDashboard = (props: { services: IService[] }) => {
    const { services } = props;

    return (
        <>
            <Table hoverable={true}>
                <Table.Head>
                    <Table.Cell>Status</Table.Cell>
                    <Table.Cell>Service</Table.Cell>
                    <Table.Cell>Name</Table.Cell>
                    <Table.Cell>Date</Table.Cell>
                    <Table.Cell>Status Code</Table.Cell>
                    <Table.Cell>Location</Table.Cell>
                </Table.Head>
                <Table.Body>
                    {services.map((service) => (
                        <ServiceDashboard key={service.id} service={service} />
                    ))}
                </Table.Body>
            </Table>
        </>
    );
};

const Provider = (props: { provider: IProvider }) => {
    const { provider } = props;

    return (
        <>
            {provider && (
                <Avatar img={provider.logo} rounded={true}>
                    <div className="space-y-1 font-medium ">
                        <div>{provider.name}</div>
                        <div className="text-sm text-gray-500 ">
                            Web:{" "}
                            <a href={provider.website} target="_blank">
                                {provider.website}
                            </a>{" "}
                            <br />
                            Email:{" "}
                            <a href={`mailto:${provider.email}`}>
                                {provider.email}
                            </a>
                        </div>
                    </div>
                </Avatar>
            )}
        </>
    );
};

const IncidentsDashboard = (props: { incidents: IIncident[] }) => {
    const { incidents } = props;

    return (
        <>
            {incidents && (
                <Table>
                    <Table.Head>
                        <Table.Cell>ID</Table.Cell>
                        <Table.Cell>Title</Table.Cell>
                        <Table.Cell>Opened</Table.Cell>
                        <Table.Cell>Closed</Table.Cell>
                        <Table.Cell>Refresh</Table.Cell>
                        <Table.Cell>Services</Table.Cell>
                    </Table.Head>
                    <Table.Body>
                        {incidents.map((incident) => (
                            <IncidentDashboard
                                key={incident.id}
                                incident={incident}
                            />
                        ))}
                    </Table.Body>
                </Table>
            )}
        </>
    );
};
const IncidentDashboard = (props: { incident: IIncident }) => {
    const { incident } = props;

    return (
        <>
            <Table.Row>
                <Table.Cell>{incident.id}</Table.Cell>
                <Table.Cell>{incident.title}</Table.Cell>
                <Table.Cell>
                    <DateFormatted date={incident.opened} />
                </Table.Cell>
                <Table.Cell>
                    <DateFormatted date={incident.closed} />
                </Table.Cell>
                <Table.Cell>{incident.refresh}</Table.Cell>
                <Table.Cell>
                    {incident.services.map((x) => `${x}, `)}
                </Table.Cell>
            </Table.Row>
            <Support support={incident.support} />
            <UpdatesDashboard updates={incident.updates} />
        </>
    );
};

const MaintenancesDashboard = (props: { maintenances: IMaintenance[] }) => {
    const { maintenances } = props;

    return (
        <>
            {maintenances && (
                <Table>
                    <Table.Head>
                        <Table.Cell>ID</Table.Cell>
                        <Table.Cell>Title</Table.Cell>
                        <Table.Cell>Start</Table.Cell>
                        <Table.Cell>Finish</Table.Cell>
                        <Table.Cell>Refresh</Table.Cell>
                        <Table.Cell>Services</Table.Cell>
                    </Table.Head>
                    <Table.Body>
                        {maintenances.map((maintenance) => (
                            <MaintenanceDashboard
                                key={maintenance.id}
                                maintenance={maintenance}
                            />
                        ))}
                    </Table.Body>
                </Table>
            )}
        </>
    );
};

const MaintenanceDashboard = (props: { maintenance: IMaintenance }) => {
    const { maintenance: maintenance } = props;

    return (
        <>
            <Table.Row>
                <Table.Cell>{maintenance.id}</Table.Cell>
                <Table.Cell>{maintenance.title}</Table.Cell>
                <Table.Cell>
                    <DateFormatted date={maintenance.start} />
                </Table.Cell>
                <Table.Cell>
                    <DateFormatted date={maintenance.finish} />
                </Table.Cell>
                <Table.Cell>{maintenance.refresh}</Table.Cell>
                <Table.Cell>
                    {maintenance.services.map((x) => `${x}, `)}
                </Table.Cell>
            </Table.Row>
            <Support support={maintenance.support} />
            <UpdatesDashboard updates={maintenance.updates} />
        </>
    );
};

const UpdatesDashboard = (props: { updates: IUpdate[] }) => {
    const { updates } = props;

    return (
        <>
            <Table.Row className="bg-gray-50 text-xs uppercase text-gray-700  ">
                <Table.Cell></Table.Cell>
                <Table.Cell>Date</Table.Cell>
                <Table.Cell colSpan={6}>Details</Table.Cell>
            </Table.Row>
            {updates.map((update) => (
                <Table.Row key={update.details}>
                    <Table.Cell></Table.Cell>
                    <Table.Cell>
                        <DateFormatted date={update.date} />
                    </Table.Cell>
                    <Table.Cell colSpan={6}>{update.details}</Table.Cell>
                </Table.Row>
            ))}
        </>
    );
};

const ServiceDashboard = (props: { service: IService; level?: number }) => {
    const { service, level = 0 } = props;

    return (
        <>
            <Table.Row className={`${level === 0 ? "border-t-4" : ""}`}>
                <Table.Cell className={`${level === 0 ? "" : "pl-10"}`}>
                    <span className="w-22 block mr-3 ">
                        {service.status === 200 && (
                            <Badge
                                icon={ShieldCheckIcon as any}
                                color="success"
                                size="sm"
                            >
                                OK
                            </Badge>
                        )}
                        {service.status === 300 && (
                            <Badge
                                icon={ShieldExclamationIcon as any}
                                color="warning"
                                size="sm"
                            >
                                Warning
                            </Badge>
                        )}
                        {service.status === 400 && (
                            <Badge icon={FireIcon  as any} color="failure" size="sm">
                                Critical
                            </Badge>
                        )}
                    </span>
                </Table.Cell>
                <Table.Cell>{service.id}</Table.Cell>
                <Table.Cell>
                    <strong>{service.name}</strong> <br />
                    {service.description}
                </Table.Cell>
                <Table.Cell>
                    <DateFormatted date={service.date} />
                </Table.Cell>
                <Table.Cell>{service.status}</Table.Cell>
                <Table.Cell>
                    {service.location && (
                        <div>
                            {service.location.lat}, {service.location.long}
                        </div>
                    )}
                </Table.Cell>
            </Table.Row>
            {service.services &&
                service.services.map((service) => (
                    <ServiceDashboard
                        key={service.id}
                        service={service}
                        level={level + 1}
                    />
                ))}
        </>
    );
};

export const Support = (props: { support?: ISupport }) => {
    const { support } = props;

    return (
        <>
            {support && (
                <Table.Row>
                    <Table.Cell></Table.Cell>
                    <Table.Cell className="bg-gray-50 text-xs uppercase text-gray-700  ">
                        Support
                    </Table.Cell>
                    <Table.Cell colSpan={6}>
                        {support.email && (
                            <>
                                {" "}
                                <strong>Email:</strong> {support.email} &nbsp;
                            </>
                        )}
                        {support.phone && (
                            <>
                                {" "}
                                <strong>Phone:</strong> {support.phone}&nbsp;
                            </>
                        )}
                        {support.url && (
                            <>
                                {" "}
                                <strong>Url:</strong>{" "}
                                <a href={support.url}>{support.url}</a>&nbsp;
                            </>
                        )}
                    </Table.Cell>
                </Table.Row>
            )}
        </>
    );
};
