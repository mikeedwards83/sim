import prettier from "prettier/standalone";
import babylon from "prettier/parser-babel";
import { ReactNode, useEffect, useState } from "react";
import { Alert } from "flowbite-react/lib/esm/components";

export const Code = (props: { title: ReactNode, object: any, capitialise?: boolean }) => {

    const { object, title, capitialise = true } = props;

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
                <span className={` ${capitialise ? "uppercase" : ""}`}>{title}
                </span>
            </div>
            {code &&
                <pre className="language-js p-4 bg-white whitespace-pre-wrap border-slate-400 border border-t-0 overf rounded-b-md overflow-hidden" dangerouslySetInnerHTML={{ __html: code }}>
                </pre>}
        </>
    )

}