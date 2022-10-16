import { IAttribute } from "../interfaces/IAttribute";

export const AttributeItem = (props: { attribute: IAttribute }) => {
    const { attribute } = props;

    return (
        <li>
            <hr className="my-4" />
            <div>
                <strong className="text-lg pr-3">{attribute.title}</strong>
                <span className="pr-3">{attribute.type} </span>
                {attribute.required && <span className="italic text-xs">(required)</span>}
            </div>
            <p className="font-light text-gray-500 ">
                {attribute.description}
            </p>
            {attribute.format && <p className="font-light text-sm text-gray-500  pt-2">
                {attribute.format}
            </p>}
        </li>
    )
}