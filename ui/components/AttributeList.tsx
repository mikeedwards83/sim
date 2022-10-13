import { IAttribute } from "../interfaces/IAttribute";
import { AttributeItem } from "./AttributeItem";

export const AttributeList = (props:{attributes:IAttribute[]}) =>{
    const {attributes} = props;

    return (
        <ul>
            {attributes.map(x=> <AttributeItem key={x.title} attribute={x} />)}
        </ul>
    )

}


