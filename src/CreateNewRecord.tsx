
export default function CreateNewRecord() {

    function formatDateProperly(_date: string) {
        const [H, M]: [number, number] = _date.split(":");
        const newDate = new Date();
        newDate.setHours(H);
        newDate.setMinutes(M);
        return newDate;
    }

    async function handleSubmitEvent(e) {

        const wake = formatDateProperly(e.target.wakeUpTime.value);
        const sleep = formatDateProperly(e.target.sleepTime.value);
        const Day = e.target.dayDesc.value;
        const yoga = e.target.yogaDes.value;



        const payload = {
            'wakeUpTime': wake,
            'sleepTime': sleep,
            'dayDescription': Day,
            'yogaDescription': yoga
        };

        try {
            const response = await fetch('http://localhost:3000/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            const data = await response.json();
            console.log('payload saved: ', data);
        }
        catch (err) {
            console.log('Error occured in payload saving. -> ', err);
        }



    }

    return (<>
        <div >
            <form onSubmit={(e) => { handleSubmitEvent(e) }} className="flex flex-col justify-center mx-auto ">
                <div className="mx-auto ">
                    <div className="mt-2 py-2 px-1 flex flex-col">
                        <label htmlFor="wakeUpTime" className="font-bold text-slate-500">Waking time</label>
                        <input type="time" name="wakeUpTime" id="wakeUpTime" className="border rounded border-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-400 " required />
                    </div>
                    <div className="mt-2 py-2 px-1 flex flex-col">
                        <label htmlFor="sleepTime" className="font-bold text-slate-500">Sleep time</label>
                        <input type="time" name="sleepTime" id="sleepTime" className="border rounded border-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-400 " required />
                    </div>
                    <div className="mt-2 py-2 px-1 flex flex-col">
                        <label htmlFor="dayDesc" className="font-bold text-slate-500">Day Description</label>
                        <textarea name="dayDesc" id="dayDesc" cols={30} rows={3} className="border rounded border-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-400 resize-none" required />
                    </div>
                    <div className="mt-2 py-2 px-1 flex flex-col">
                        <label htmlFor="yogaDes" className="font-bold text-slate-500">Yoga Description</label>
                        <textarea name="yogaDes" id="yogaDes" cols={30} rows={3} className=" border rounded border-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-400 resize-none" required></textarea>
                    </div>
                    <div className="mt-2 py-2 px-1 flex flex-col">
                        <button className="py-2 px-1 text-lg font-bold text-slate-600 border hover:border-yellow-500 bg-yellow-200 rounded ">Save data</button>
                    </div>
                </div>
            </form>
        </div>
    </>)
}