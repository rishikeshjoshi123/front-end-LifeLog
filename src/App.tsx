import Navbar from "./Navbar"
import CreateNewRecord from "./CreateNewRecord"
import DisplayRecords from "./DisplayRecords"
import { useState } from "react"


function App() {
  const [formToggle, setFromToggle] = useState(false);

  function handleFormToggle(curState: boolean) {
    setFromToggle(curState);
  }

  return (
    <>
      <div className="h-[100vh] bg-slate-50 ">
        <Navbar handleNavButton={handleFormToggle} />
        {formToggle ? <CreateNewRecord /> : <DisplayRecords />}
      </div> 
    </>
  )

}

export default App
