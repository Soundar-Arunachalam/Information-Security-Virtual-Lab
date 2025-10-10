import React from "react";

function ContentHeader({ icon, title, description }) {
    return (
        <div className="content-header">
            <h2>
                <i className={icon}></i>
                {title}
            </h2>
            <p>{description}</p>
        </div>
    );
}

export default ContentHeader;
