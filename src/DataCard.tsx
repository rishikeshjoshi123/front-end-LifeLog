import { useState } from "react";

export interface PayloadShape {
    _id?: string;
    date?: Date;
    wakeUpTime?: Date;
    sleepTime?: Date;
    dayDescription?: string;
    yogaDescription?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
interface PropShape {
    _id: string;
    date: Date;
    wakeUpTime: Date;
    sleepTime: Date;
    dayDescription: string;
    yogaDescription: string;
    createdAt: Date;
    updatedAt: Date;
    onDeleteClick: (_id: string) => void;
    onUpdateData: (obj: PayloadShape) => void;
}

export function DataCard({ _id, date, wakeUpTime, sleepTime, dayDescription, yogaDescription, createdAt, updatedAt, onDeleteClick, onUpdateData }: PropShape) {

    const [wakeInput, setWakeInput] = useState(toggleDateFormat(new Date(wakeUpTime.toString())));
    const [sleepInput, setSleepInput] = useState(toggleDateFormat(new Date(sleepTime.toString())));
    const [dayInput, setDayInput] = useState(dayDescription);
    const [yogaInput, setYogaInput] = useState(yogaDescription);

    const _date = new Date(date.toString()); //mongo date obj to JS date obj

    const [editToggle, setEditToggle] = useState(false);
    function handleEditButtonClick() {
        setEditToggle(prev => !prev);
    }

    async function handleUpdateButtonClick() {

        const payload: PayloadShape = {
            '_id': _id,
            'wakeUpTime': toggleDateFormat(wakeInput),
            'sleepTime': toggleDateFormat(sleepInput),
            'dayDescription': dayInput,
            'yogaDescription': yogaInput,
        };

        // FIRST: send fetch request to /:id and update cur card
        try {
            const response = await fetch(`http://localhost:3000/${_id}`, {
                'method': 'PUT',
                'headers': {
                    'Content-Type': 'application/json'
                },
                'body': JSON.stringify(payload)
            });
            console.log(response);
            console.log(await response.json());
            // SECOND: update the 'data' state
            onUpdateData(payload);
            // THIRD: auto close the editting section of card!
            handleEditButtonClick();
        }
        catch (err) {
            console.log('Error: component->DataCard, process->post req of card update');
            throw err;
        }

    }

    return (
        <>

        <div className="flex flex-col my-2 p-2 mx-2 w-4/5 bg-slate-300 rounded text-2xl ">
            <div className="flex justify-between">
                    <div className="flex items-center space-x-2 px-3 py-1 my-1 rounded  bg-slate-100 text-slate-700 font-semibold">
                        {_date.toDateString()}
                </div>
                <div className="flex items-center space-x-2 p-1 my-1 rounded  bg-slate-100">
                        <div className="flex p-2 space-x-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-orange-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                            </svg>
                            <span className="text-slate-700">
                                {editToggle ? <div>
                                    <input type="time" name="wakeUpTime" id="wakeUpTime" className="border rounded border-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-400 text-xl" value={wakeInput} onChange={(e) => setWakeInput(e.target.value)} />
                                </div> : toTwelveHours(toggleDateFormat(new Date(wakeUpTime.toString())))}
                            </span>
                        </div>
                        <div className="flex p-2 first-letter:space-x-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-purple-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                            </svg>
                            <span className="text-slate-700">
                                {editToggle ?
                                    <div className="pl-1">
                                        <input type="time" name="sleepTime" id="sleepTime" className="border rounded border-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-400 text-xl" value={sleepInput} onChange={(e) => setSleepInput(e.target.value)} />
                                    </div> : toTwelveHours(toggleDateFormat(new Date(sleepTime.toString())))}
                            </span>
                        </div>
                        <div className="p-2">
                            {
                                editToggle ?
                                    <button className="flex items-center" onClick={handleEditButtonClick}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600 hover:text-indigo-400">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </button>

                                    :
                                    <button className="flex items-center" onClick={handleEditButtonClick}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600 hover:text-indigo-400">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                        </svg>
                                    </button>

                            }
                        </div>
                        <div className="p-2">
                        <button onClick={() => onDeleteClick(_id)} className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-600 hover:text-red-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                            </button>
                    </div>
                </div>

            </div>
            <div className="flex flex-col p-1 my-1 rounded bg-slate-100 text-slate-700  ">
                <div className="py-1 font-semibold bg-slate-100 text-slate-700">Day description: </div>

                    {editToggle ? <textarea name="dayDesc" id="dayDesc" cols={30} rows={3} className="border rounded border-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-400 resize-none text-2xl" value={dayInput} onChange={(e) => setDayInput(e.target.value)} /> : <p>
                    {dayDescription}
                    </p>}


            </div>
            <div className="flex flex-col p-1 my-1 rounded bg-slate-100 text-slate-700 ">
                <div className="py-1 font-semibold bg-slate-100 text-slate-700">Yoga description: </div>
                    {editToggle ? <textarea name="yogaDesc" id="yogaDesc" cols={30} rows={3} className="border rounded border-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-400 resize-none text-2xl" value={yogaInput} onChange={(e) => setYogaInput(e.target.value)} /> : <p>{yogaDescription}</p>}



            </div>
                {!editToggle ? <div></div> : <div className="flex justify-center ">
                    <button className="px-3 py-2 mt-1 text-white bg-indigo-700 rounded-md font-bold hover:ring-2 hover:ring-white hover:bg-white hover:text-indigo-700" onClick={handleUpdateButtonClick}>Update data</button>
                </div>}


        </div>
        </>
    );



    // Toggle date fromat between JS date obj and date string("23:32")
    function toggleDateFormat(_date: any): any {
        if (typeof _date === 'string') {
            try {
                const [H, M]: number[] = _date.split(":").map(val => parseInt(val));
                const newDate = new Date();
                newDate.setHours(H);
                newDate.setMinutes(M);
                return newDate;
            }
            catch (err) {
                throw err;
            }
        }
        else {
            const H = _date.getHours();
            const M = _date.getMinutes();
            return `${H}:${M}` as string;
        }
    }
    // "23:12" -> "11:12 PM"
    function toTwelveHours(_date: string) {
        let [H, M]: number[] = _date.split(":").map(E => parseInt(E));
        const setting = (H < 12) ? 'AM' : 'PM';
        H %= 12;
        if (H === 0) H = 12;

        return `${H}:${M} ${setting}`;
    }
}