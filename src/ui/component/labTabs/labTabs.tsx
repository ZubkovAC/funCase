import React from 'react';
import {CustomizedBadges} from "../basket/iconBasket";
import css from './labTabs.module.css'

export const LabTabs = () => {

    return (
        <div className={css.labTabs}>
            <div >
                <span className={css.labTabsContainer}>
                    <span className={css.menu}>one</span>
                    <span className={css.menu}>two</span>
                    <span className={css.menu}>three</span>
                </span>
            </div>
            <span style={{ display:'flex',width:'200px'}}>
                <CustomizedBadges />
            </span>

        </div>
    );
}