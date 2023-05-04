import Navbar from "./Navbar"
import CreateNewRecord from "./CreateNewRecord"
import DisplayRecords from "./DisplayRecords"


function App() {

  return (
    <>
      <div className="h-[100vh] bg-slate-50 ">

        <Navbar />
        {/* <CreateNewRecord /> */}
        <DisplayRecords />

      </div>

    </>
  )
}

export default App
