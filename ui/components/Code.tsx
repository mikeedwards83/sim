import prettier from "prettier/standalone";
import babylon from "prettier/parser-babel";
import { ReactNode, useEffect, useState } from "react";
import { Alert } from "flowbite-react/lib/esm/components";

export const Code = (props: { title: ReactNode, object: any }) => {

    const { object, title } = props;

    const [code, setCode] = useState<string>();

    const formatCode = () => {
        const formattedCode = prettier.format(JSON.stringify(object), {
            parser: "json",
            plugins: [babylon]
        });

        setCode(formattedCode);
    };

    useEffect(() => {
        formatCode()
    }, []);
    return (
        <>
            <div className="p-6 bg-slate-200 border-slate-400 border border-b-0  rounded-t-md" >
                <span className="uppercase">{title}
                </span>
            </div>
            {code &&
                <pre className="language-js p-4 bg-white whitespace-pre-wrap border-slate-400 border border-t-0  rounded-b-md" dangerouslySetInnerHTML={{ __html: code }}>
                </pre>}
        </>
    )

}