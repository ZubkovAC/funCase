import React from 'react';
import css from './Title.module.css'

type TitlePropsType ={
    title:string
    date:string
}

export const Title = (props: TitlePropsType) => {
    return (
        <div className={css.title}>
            <div>
                <h2 style={{paddingLeft: '15px'}}>{props.title}</h2>
                <h5>{props.date}</h5>
            </div>
            <div className={css.input}>
                <input type="text" placeholder={'Search'} />
            </div>
        </div>
    );
};
