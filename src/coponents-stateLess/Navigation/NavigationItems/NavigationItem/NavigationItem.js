import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import classes from './NavigationItem.module.scss';
 
const NavigationItem = (props) => {
    const nodeRef = React.useRef(null);

    const [enterAnimation, setEnterAnimation] = useState(false);
    const [exitAnimation, setExitAnimation] = useState(false);

    useEffect(() => {
        console.log(props.pkey+': props.starter=',props.starter);
        if(props.starter===true) {
            setEnterAnimation(true);
            setExitAnimation(false);
        } else {
            setEnterAnimation(false);
            setExitAnimation(true);
        }
    },[props.starter]);

    return (
        <CSSTransition
            key={props.pkey}
            nodeRef={nodeRef}
            in={props.starter}
            enter={enterAnimation}
            exit={exitAnimation}
            classNames={{
                enter: classes.NavigationItemEnter,
                enterActive: classes.NavigationItemEnterActive,
                enterDone: classes.NavigationItemEnterDone,
                exit: classes.NavigationItemExit,
                exitActive: classes.NavigationItemExitActive,
                exitDone: classes.NavigationItemExitDone,
            }}
            timeout={props.timeout}
            //mountOnEnter
            //unmountOnExit
            onEnter={() => {
                        console.log(props.pkey+': onEnter');
                    }}
            onEntering={() => {
                        console.log(props.pkey+': onEntering');
                    }}
            onEntered={
                        () => {
                            console.log(props.pkey+': onEntered');
                        }
                    }
            onExit={
                () => {
                    console.log(props.pkey+': onExit');
                    
                }}
            onExiting={() => {
                        console.log(props.pkey+': onExiting');
                    }}
            onExited={() => {
                        console.log(props.pkey+': onExited');
                    }}
        >
            <li ref={nodeRef} className={classes.NavigationItem} onClick={props.click}>

                <NavLink
                    // activeClassName={classes.active}
                    //className={({isActive}) => isActive ? classes.active : ''}
                    to={props.link}
                    exact={props.exact}
                >
                    {props.children}
                </NavLink>
            </li>
        </CSSTransition>
    );
}
 
export default NavigationItem;