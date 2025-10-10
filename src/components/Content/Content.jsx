import React from "react";
import ContectSection from "../ContentSection/ContectSection";

function Content() {
    const headerData = {
        icon: "fas fa-home",
        title: "Security Lab Dashboard",
        description:
            "Welcome to the Information Security Virtual Lab. Explore various cryptography algorithms and security protocols through interactive experiments."
    };

    return <ContectSection headerData={headerData} />;
}

export default Content;
