
export default function CreateNewRecord() {

    return (<>
        <div >
            <form className="flex flex-col justify-center mx-auto ">
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