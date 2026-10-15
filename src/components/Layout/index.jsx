import { Outlet } from "react-router-dom"
import Header from "../Header"
import './layout.css'

function Layout() {

    return (
        <div className="layout">
            <Header/>
            <main className="layout-content">
                <Outlet/>
            </main>
        </div>
    )
    
}

export default Layout