import React from 'react';
import {SoupsType} from "../../../state/orderReducer";

type BasketPropsType ={
    price: SoupsType
}

export const Basket = (props:BasketPropsType) => {
    let total = props.price.counter * props.price.price

    return (
        <div>
            <div key={props.price.food}>
                <span>-{props.price.food} </span>
                <span> {props.price.counter}</span>
                <span> x{props.price.price}$</span>
                <span> ={total.toFixed(2)}$</span>
            </div>
        </div>
    );
};
