import { NextApiRequest, NextApiResponse } from "next";
import { goodJson } from "../../../ui/data/Good";
import { mixedJson } from "../../../ui/data/Mixed";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    if (req.query.example?.length === 1) {
        const key = req.query.example[0];
        console.log(key);

        switch (key) {
            case "good":
                res.status(200).json(goodJson);
                break;
            case "mixed":
                res.status(200).json(mixedJson);

            default:
                res.status(404).end();
                break;
        }
    }
    else {
        res.status(404).end();
    }
}

