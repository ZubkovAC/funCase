import React from 'react';
import css from './sidebar.module.css'
export const Sidebar = () => {
    return (
        <div className={css.sidebar}>
               <div className={css.column}>
                   soups
               </div>
                <div className={css.column}>
                    drink
                </div>
        </div>
    );
};

