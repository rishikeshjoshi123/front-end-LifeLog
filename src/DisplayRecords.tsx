import { useEffect, useState } from "react";
import DataCard from "./DataCard";

interface DataShape {
    _id: string;
    date: Date;
    wakeUpTime: Date;
    sleepTime: Date;
    dayDescription: string;
    yogaDescription: string;
    createdAt: Date;
    updatedAt: Date;
}


export default function DisplayRecords() {

    const [data, setData] = useState<DataShape[]>();

    useEffect(() => {

        //declaring and calling function
        (async () => {
            const response = await fetch('http://localhost:3000/');
            const resData = await response.json();
            try {
                await setData(resData);

            }
            catch (err) { console.log(err); }
        })();

    }, []); // do this when component mounts



    return (<>
        <div className="h-[680px] flex flex-col items-center overflow-y-scroll">
            {data?.map(D => {
                return <DataCard key={D._id} {...D} />
            })}
        </div>
    </>)
}