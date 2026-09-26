 import { Routes ,Route } from "react-router-dom"
 import Signin from "./Compoents/Signin"
 import Signup from "./Compoents/Signup"
 import Navbar from "./Compoents/Navbar"
const App = () => {
  return (
    <div className="min-h-screen   ">
      <Navbar />
      <div className="flex flex-col gap-10 items-center">
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      </div>
    </div>
  )
}

export default App
