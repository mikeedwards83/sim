import { ReactNode } from "react";

export interface IAttribute{
    title:string
    type:string
    description:string | ReactNode
    required?:boolean
    format?:string
}