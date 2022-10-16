import { ILocation } from "./ILocation";

export interface IService {
    id: string
    name: string
    description: string
    date: string
    refresh: number
    status: number
    location?: ILocation
    services?: IService[]
}