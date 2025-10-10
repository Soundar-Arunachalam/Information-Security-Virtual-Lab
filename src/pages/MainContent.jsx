import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Content from '../components/Content/content';

function MainContent() {
    return (
        <div className="main-content">
            <Navbar />
            <div className="content">
                <Content />
            </div>
        </div>
    );
}

export default MainContent;
