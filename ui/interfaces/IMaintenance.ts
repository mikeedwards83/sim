import { ISupport } from "./ISupport";
import { IUpdate } from "./IUpdate";

export interface IMaintenance {
    id: string
    start: string
    finish: string
    title: string
    refresh: number
    services: string[]
    updates: IUpdate[]
    support?: ISupport
}