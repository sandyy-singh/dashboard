import React from "react";
import SideNav from "./components/SideNav"
// import UpperNav from "./components/UpperNav"
import MainContent from "./components/MainContent"
export default function Dashboard() {
    return (
        <div className="Dashboard">
            <SideNav />
            {/* <UpperNav /> */}
            <MainContent />
        </div>

    )
}