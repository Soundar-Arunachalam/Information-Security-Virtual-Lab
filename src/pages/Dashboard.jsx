import React from "react";
import Navbar from "../components/Navbar/Navbar";
import CardGrid from "../components/cards/CardGrid";
import ContentHeader from "../components/ContentHeader/ContentHeader";

function Dashboard() {
    const headerData = {
        icon: "fas fa-home",
        title: "Security Lab Dashboard",
        description:
            "Welcome to the Information Security Virtual Lab. Explore various cryptography algorithms and security protocols through interactive experiments."
    };

    return (
        <div className="content-section active">
            <Navbar />
            <ContentHeader
                icon={headerData.icon}
                title={headerData.title}
                description={headerData.description}
            />
            <div className="content-body">
                <CardGrid />
            </div>
        </div>
    );
}

export default Dashboard;
