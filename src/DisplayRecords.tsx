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

    async function handleDeleteClick(_id: string) {
        try {
            const response = await fetch(`http://localhost:3000/${_id}`, {
                'method': 'DELETE'
            });
            const data = await response.json();
            console.log('delete done and response is :', data);
            console.log('delete done and json is :', data);

            setData(prev => {
                return prev?.filter((E) => {
                    if (E._id !== _id) return E;
                });
            })
        }
        catch (err) {
            console.log('Error occured in delete button :', err);
        }
    }

    useEffect(() => {

        //declaring and calling function
        (async () => {
            const response = await fetch('http://localhost:3000/');
            const resData = await response.json();
            try {
                await setData(resData.reverse());

            }
            catch (err) { console.log(err); }
        })();

    }, []); // do this when component mounts



    return (<>
        <div className="h-[680px] flex flex-col items-center overflow-y-scroll">
            {data?.map(D => {
                return <DataCard key={D._id} {...D} onDeleteClick={handleDeleteClick} />
            })}
        </div>
    </>)
}