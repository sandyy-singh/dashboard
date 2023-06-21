import React from "react";
import UpperNav from "./UpperNav"
import Location from "./Location"
import Analytics from "./Analytics"
export default function MainContent() {
    return (
        <div className="maincontent">
            <UpperNav />
            <Location />
            <Analytics />
            {/* <LowerBody /> */}
        </div>

    )
}