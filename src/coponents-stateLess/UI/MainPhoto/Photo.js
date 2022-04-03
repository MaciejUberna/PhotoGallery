import React from 'react';
import classes from './Photo.module.scss';
import photo from '../../../assets/images/CV/KwadraturaTwarz.jpg';

const Photo = () => {
    return (
        <img className={classes.GeneralInfo} src={photo} alt='Zdjecie'/>
    );

}

export default Photo;