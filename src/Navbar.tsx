

export default function Navbar() {
    return (<>

        <div className="flex justify-center px-2 pt-6 pb-2 space-x-6 bg-slate-100 border-b-2 border-slate-200 shadow-md">
            <a href="#" className=" text-xl text-indigo-600 border-b-4 rounded-md border-indigo-600 font-bold  hover:border-indigo-300 ">Create New</a>
            <a href="#" className=" text-xl text-green-600 border-b-4 rounded-md border-green-600 font-bold  hover:border-green-300 ">Show Records</a>
        </div>
    </>)
}