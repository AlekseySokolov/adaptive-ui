import React from 'react';
import "./itemInCard.css";

export const ItemInCard = (props) => {
    const {icon, title, text, price} = props
    return (
        <a href="#" className="item">
            <img className="item__icon" src={icon} alt=""/>
            <h2 className="item__title">{title}</h2>
            <p className="item__text">{text}</p>
            <div className="item__price">
                <span className="item__value">
                    <sup className="item__currency">$</sup>
                    {price}
                </span>
                /month
            </div>
        </a>
    )
};