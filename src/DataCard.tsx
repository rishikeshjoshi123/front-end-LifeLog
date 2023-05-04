

export default function DataCard() {

    return (
        <div className="flex flex-col my-2 p-2 mx-2 w-96 bg-slate-300 rounded">
            <div className="flex justify-between">
                <div className="p-1 my-1  rounded bg-slate-100 text-slate-700 font-semibold">
                    27-Jan-2023
                </div>
                <div className="flex space-x-2 p-1 my-1 rounded  bg-slate-100">
                    <div className="flex space-x-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-orange-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg><span className="text-slate-700">6:00 AM</span>
                    </div>
                    <div className="flex space-x-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-purple-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                    </svg><span className="text-slate-700">11:30 PM</span>
                    </div>
                </div>

            </div>
            <div className="p-1 my-1 rounded bg-slate-100 text-slate-700">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat natus quas, minus quas distinctio non maxime ea explicabo neque expedita est, sit ipsa. Reprehenderit minus, quibusdam eligendi ut, dignissimos pariatur dolore culpa officia optio id magnam labore libero aliquid repudiandae sed provident quaerat?
            </div>
            <div className="p-1 my-1 rounded bg-slate-100 text-slate-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, non.
            </div>

        </div>
    );
}