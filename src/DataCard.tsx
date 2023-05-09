
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
}

export default function DataCard({ _id, date, wakeUpTime, sleepTime, dayDescription, yogaDescription, createdAt, updatedAt, onDeleteClick }: PropShape) {



    function formatDate(D: Date) {
        return new Date(D.toString());
    }
    //formating
    const _date = formatDate(date);
    const _woke = formatDate(wakeUpTime);
    const _slept = formatDate(sleepTime);

    return (
        <div className="flex flex-col my-2 p-2 mx-2 w-4/5 bg-slate-300 rounded text-2xl ">
            <div className="flex justify-between">
                <div className="p-1 my-1  rounded bg-slate-100 text-slate-700 font-semibold">
                    {_date.toDateString()}
                </div>
                <div className="flex items-center space-x-2 p-1 my-1 rounded  bg-slate-100">
                    <div className="flex space-x-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-orange-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                        </svg>
                        <span className="text-slate-700">{_woke.toLocaleTimeString()}</span>
                    </div>
                    <div className="flex space-x-2 items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-purple-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                    </svg><span className="text-slate-700">{_slept.toLocaleTimeString()}</span>
                    </div>
                    <div className="p-1">
                        <button onClick={() => onDeleteClick(_id)} className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                        </button>


                    </div>
                </div>

            </div>
            <div className="flex flex-col p-1 my-1 rounded bg-slate-100 text-slate-700  ">
                <div className="py-1 font-semibold bg-slate-100 text-slate-700">Day description: </div>
                <p>
                    {dayDescription}
                </p>

            </div>
            <div className="flex flex-col p-1 my-1 rounded bg-slate-100 text-slate-700 ">
                <div className="py-1 font-semibold bg-slate-100 text-slate-700">Yoga description: </div>
                <p>{yogaDescription}</p>

            </div>

        </div>
    );
}