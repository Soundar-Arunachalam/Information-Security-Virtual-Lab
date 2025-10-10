import React from "react";
import ContentHeader from "../ContentHeader/ContentHeader";
import ContentBody from "../ContentBody/ContentBody";

function ContectSection({ headerData }) {
    return (
        <div className="content-section active">
            <ContentHeader
                icon={headerData.icon}
                title={headerData.title}
                description={headerData.description}
            />
            <ContentBody />
        </div>
    );
}

export default ContectSection;
