import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
const Root = () => {
    return (
        <div className="w-10/12 mx-auto">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Root
