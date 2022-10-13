import { IDefinition } from "../interfaces/IDefinition";
import { AttributeList } from "./AttributeList";
import { Code } from "./Code";

export const Definition = (props: { definition: IDefinition, className?:string }) => {

    const { definition, className ="" } = props;

    return (
        <div className={className}>
            <h3 className="mb-2 text-2xl font-bold dark:text-white mb-4">The {definition.name}</h3>
            <div className="mt-2 mb-8 font-light text-gray-500 dark:text-gray-400">
                {definition.description}
            </div>
            <div className=" gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                <div>
                    <h4 className="mb-2 text-xl  dark:text-white">Attributes</h4>
                    <AttributeList attributes={definition.attributes} />
                </div>
                <div>
                    <Code object={definition.example} title={`The ${definition.name}`} />
                </div>

            </div>
        </div>
    )
}