import React from 'react';
import Photo from '../../UI/MainPhoto/Photo';
import PropTypes from 'prop-types';
import classes from './Toolbar.module.scss';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
 
const Toolbar = props => {
    return (
        <Auxiliary>
            <div className={classes.GeneralInfo}>
                <div className={classes.GeneralInfo__headFiller}>

                </div>
                <div className={classes.GeneralInfo__photoContainer}>
                    <Photo/>
                </div>
                <header className={classes.GeneralInfo__menuContainer}>
                    <DrawerToggle clicked={props.drawerToggleClicked}/>
                    <nav className={classes.DesktopOnly}>
                        <NavigationItems/>
                    </nav>
                </header>
                <div className={classes.GeneralInfo__tailFiller}>

                </div>
            </div>
        </Auxiliary>
    );
    
};

Toolbar.propTypes = {
    drawerToggleClicked: PropTypes.func.isRequired
};
 
export default Toolbar;