import React from 'react';
import Photo from '../../UI/MainPhoto/Photo';
import AboutMe from './AboutMeToolbar/AboutMe';
import PropTypes from 'prop-types';
import classes from './Toolbar.module.scss';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
 
const Toolbar = props => {
    let contextMenu = (<p>Loading...</p>);
    const subPathMatcher = str => {
        switch(true) {
            case /^\/photo-gallery\/info/.test(str):
                contextMenu = <AboutMe/>;
                break;
            case /^\/photo-gallery\/photos/.test(str):
                contextMenu = (
                    <p>Photos mockup...</p>
                );
                break;
            case /^\/photo-gallery\/blog/.test(str):
                contextMenu = (
                    <p>Blog mockup...</p>
                );
                break;
            default:
                contextMenu = (
                    <p>Unknown pathname match.</p>
                );
        };
    };
    subPathMatcher(window.location.pathname);
    return (
        <Auxiliary>
            <div className={classes.GeneralInfo}>
                <div className={classes.GeneralInfo__photoContainer}>
                    <Photo/>
                </div>
                <header className={classes.GeneralInfo__menuContainer}>
                    <DrawerToggle clicked={props.drawerToggleClicked}/>
                    <nav className={classes.DesktopOnly}>
                        <NavigationItems/>
                    </nav>
                </header>
                <div className={classes.GeneralInfo__tailFiller}/>
            </div>
            <div className={classes.Toolbar}>
                {contextMenu}
            </div>
        </Auxiliary>
    );
    
};

Toolbar.propTypes = {
    drawerToggleClicked: PropTypes.func.isRequired
};
 
export default Toolbar;