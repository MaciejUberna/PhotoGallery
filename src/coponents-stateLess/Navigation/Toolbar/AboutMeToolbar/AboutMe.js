import React from 'react';
import userData from '../../../../assets/config/userConfig';
import cls from './AboutMe.module.scss';

const Omnie = () => {
    return (
        <div className={cls.Main}>
            <p className={cls.Main_Start}> {userData.name} &nbsp; {userData.surname} </p>
            <p className={cls.Main_Middle}> {userData.email} &nbsp; </p>
            <p className={cls.Main_End}> {userData.phone} </p>
        </div>
    );
}

export default Omnie;