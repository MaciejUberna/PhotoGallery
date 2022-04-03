import React, { useState } from 'react';

import Auxiliary from '../Auxiliary/Auxiliary';
import classes from './Layout.module.scss';
import Toolbar from '../../coponents-stateLess/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../coponents-stateLess/Navigation/SideDrawer/SideDrawer';

const Layout = props => {

    const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

    const sideDrawerClosedHandler = () => {
        setSideDrawerIsVisible(false);
    };

    const sideDrawerToggleHandler = () => {
        setSideDrawerIsVisible(!sideDrawerIsVisible);
    };
    
    return (
        <Auxiliary>
            <Toolbar
                drawerToggleClicked={sideDrawerToggleHandler}
            />
            <SideDrawer 
                
                open={sideDrawerIsVisible}
                
                closed={sideDrawerClosedHandler}
            />
            <main className={classes.Content}>
                {props.children}
            </main>
        </Auxiliary>
        );
};

export default Layout;

