import React from "react";
import css from './cardHeaders.module.css'
import {useDispatch} from "react-redux";
import {food, SoupsType} from "../../../state/orderReducer";

type CardHeadersPropsType = {
    soup: SoupsType
}
export const CardHeaders = (props: CardHeadersPropsType) => {

    const dispatch = useDispatch()
    const addSoups = () => {
        dispatch(food(props.soup.food))
    }

    return (
        <div className={css.cards}>
            <div className={css.test}>
                <img className={css.img} src={props.soup.img} alt="soup"/>
                <h3>{props.soup.food}</h3>
                <h3>{props.soup.price}$
                    <button className={css.button} onClick={addSoups}>+</button>
                </h3>
                <h3>20 bowls available</h3>
            </div>
            <div className={css.cardInvisible}>
            </div>
        </div>
    );
}
