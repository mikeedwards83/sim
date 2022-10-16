import { ISupport } from "./ISupport";
import { IUpdate } from "./IUpdate";

export interface IIncident{
    id:string
    opened:string
    closed:string
    title:string
    refresh:number
    services:string[]
    updates:IUpdate[]
    support?:ISupport

}