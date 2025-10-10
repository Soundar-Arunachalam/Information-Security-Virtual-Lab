import React from "react";
import Cards from "./Cards";
const encryptionCards = [
    {
        title: "Caesar Cipher",
        icon: "fas fa-exchange-alt",
        description: "One of the simplest and most widely known encryption techniques. It is a type of substitution cipher."
    },
    {
        title: "Hill Cipher",
        icon: "fas fa-mountain",
        description: "A polygraphic substitution cipher based on linear algebra. Each letter is represented by a number modulo 26."
    },
    {
        title: "SHA Algorithm",
        icon: "fas fa-hashtag",
        description: "Secure Hash Algorithms are cryptographic hash functions that take input and produce a fixed-size string."
    },
    {
        title: "AES Encryption",
        icon: "fas fa-lock",
        description: "Advanced Encryption Standard is a symmetric encryption algorithm widely used across the globe."
    },
    {
        title: "RSA Algorithm",
        icon: "fas fa-key",
        description: "A public-key cryptosystem that is widely used for secure data transmission and digital signatures."
    },
    {
        title: "Digital Signature",
        icon: "fas fa-signature",
        description: "A mathematical scheme for verifying the authenticity of digital messages or documents."
    },
];

const CardGrid = () => {
    return (
        <div className="card-grid">
            {encryptionCards.map((card, index) => (
                <Cards
                    key={index}
                    icon={card.icon}
                    title={card.title}
                    description={card.description}
                />
            ))}
        </div>
    );
};

export default CardGrid;
