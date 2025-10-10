import React from "react";
const Cards = ({ icon, title, description }) => {
    return (
        <div className="card">
            <h4>
                <i className={icon}></i> {title}
            </h4>
            <p>{description}</p>
        </div>
    );
};

export default Cards;
