import React from 'react';
import {Headers} from "./headers/headers";
import {CardHeaders} from "../component/cards/cards";
import css from './soups.module.css'
import {useSelector} from "react-redux";
import {AppStateType} from "../../state/store";
import {SoupsType} from "../../state/orderReducer";
import {Basket} from "../component/basket/basket";

export const Soups = () => {

    const soups = useSelector<AppStateType, Array<SoupsType>>(state => state.order.order.soups)

    let priceFind = soups.filter(s => s.counter > 0)
    let priceOrder = priceFind.map(p => p.price * p.counter).reduce((acc, el) => acc + el, 0)

    return (
        <div className={css.soups}>
            <Headers/>
            <div className={css.containerFood}>
                {
                    soups.map(s => <CardHeaders key={s.food} soup={s}/>)
                }
            </div>
            <span className={css.strict}>
                total price: {priceOrder.toFixed(2)}$
            </span>
            <span>
                {
                    priceFind.map(p => <Basket price={p} key={p.food}/>)
                }
            </span>
        </div>
    );
};

