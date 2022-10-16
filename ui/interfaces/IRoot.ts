import { IIncident } from "./IIncident";
import { IMaintenance } from "./IMaintenance";
import { IProvider } from "./IProvider";
import { IService } from "./IService";

export interface IRoot{
    provider:IProvider
    services:IService[]
    incidents:IIncident[]
    maintenance:IMaintenance[]
}