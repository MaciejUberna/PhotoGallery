import React from 'react';

import classes from './NavigationItems.module.scss'
import NavigationItem from './NavigationItem/NavigationItem';
// ñ
 
const NavigationItems = () => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/photo-gallery/info" >O mnie</NavigationItem>
            <NavigationItem link="/photo-gallery/photos" >Galeria zdjęć</NavigationItem>
        </ul>
    );
};
 
export default NavigationItems;