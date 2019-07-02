import React from 'react';
import {ItemInCard} from "./ItemInCard";
import {cardParams} from "./cardParams";
import "./card.css";

export const Card = () => {
    return (
        <div className="card">
            {cardParams.map(item =>
                <ItemInCard
                    icon={item.icon}
                    title={item.title}
                    text={item.text}
                    price={item.price}
                    key={item.title}
                />)}
        </div>
    )
};