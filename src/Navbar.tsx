
interface NavbarProps {
    handleNavButton: (curState: boolean) => any;
}

export default function Navbar({ handleNavButton }: NavbarProps) {
    return (<>

        <div className="flex justify-center px-2 pt-6 pb-2 space-x-6 bg-slate-100 border-b-2 border-slate-200 shadow-md">
            <a href="#" className=" text-xl text-indigo-600 border-b-4 rounded-md border-indigo-600 font-bold transition duration-150 hover:border-indigo-300 hover:scale-110" onClick={() => handleNavButton(true)}>Create New</a>
            <a href="#" className=" text-xl text-green-600 border-b-4 rounded-md border-green-600 font-bold transition duration-150 hover:border-green-300 hover:scale-110" onClick={() => handleNavButton(false)}>Show Records</a>
        </div>
    </>)
}