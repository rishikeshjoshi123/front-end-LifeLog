import DataCard from "./DataCard";


export default function DisplayRecords() {

    return (<>
        <div className="h-[680px] flex flex-col items-center overflow-y-scroll">
            <DataCard />
            <DataCard /><DataCard /><DataCard /><DataCard /><DataCard /><DataCard /><DataCard />
        </div>
    </>)
}