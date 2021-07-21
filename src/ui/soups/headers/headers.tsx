import React from 'react';
import {Title} from "../../component/titleHeader/Title";
import {LabTabs} from "../../component/labTabs/labTabs";

export const Headers = () => {
    return (
        <div style={{width:'100%'}}>
            <Title title={'Jaegar Resto'} date={'Tuesday, 2 Fed 2021'}/>
            <LabTabs />
        </div>
    );
};