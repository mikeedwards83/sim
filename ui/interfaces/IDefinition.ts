import { ReactNode } from "react";
import { IAttribute } from "./IAttribute";

export interface IDefinition {
    name:string
    attributes:IAttribute[]
    example: any;
    description: ReactNode
}