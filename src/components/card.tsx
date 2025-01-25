import React from 'react';

interface CardProps {
    image: string;
    text: string;
    link: string;
}

const Card: React.FC<CardProps> = ({ image, text, link }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="group">
            <div className="relative bg-transparent transform transition-transform hover:scale-103">
                <img
                    src={image}
                    alt={text}
                    className="w-full aspect-square object-cover group-hover:opacity-90 shadow-xl"
                />
                <div className="bg-red-700 p-4 w-60 text-center absolute -bottom-5 -right-5 shadow-xl">
                    <h3 className="text-white font-bold text-lg">{text}</h3>
                </div>
            </div>
        </a>
    );
};

export default Card;