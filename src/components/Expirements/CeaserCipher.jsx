import React from 'react'
import ContentHeader from '../ContentHeader/ContentHeader'
import Navbar from '../Navbar/Navbar';
function CeaserCipher() {
    const headerData = {
        icon: "fas fa-exchange-alt",
        title: "Caesar Cipher",
        description:
            "The Caesar cipher is one of the simplest and most widely known encryption techniques."
    };
    return (
        <>
            <Navbar />
            <div className='content-body'>
                <ContentHeader
                    icon={headerData.icon}
                    title={headerData.title}
                    description={headerData.description}
                />
                <div className='content-body'>
                    <h3>About Caesar Cipher</h3>
                    <p>The method is named after Julius Caesar, who used it in his private
                        correspondence. The encryption step performed by a Caesar cipher is
                        often incorporated as part of more complex schemes, such as the
                        Vigenère cipher, and still has modern application in the ROT13 system.
                    </p>
                </div>
            </div>
        </>
    )
}

export default CeaserCipher
