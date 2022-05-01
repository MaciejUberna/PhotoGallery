import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import classes from './NavigationItem.module.scss';
 
const NavigationItem = props => {
    const ref = useRef(null);

    useEffect(() => {
        console.log("Ref has changed: ",ref.current);
    },[ref.current])

    return (
        <CSSTransition
            nodeRef={ref}
            in={props.starter}
            classNames={{
                enter: classes.NavigationItemEnter,
                enterActive: classes.NavigationItemEnterActive,
                enterDone: classes.NavigationItemEnterDone,
                exit: classes.NavigationItemExit,
                exitActive: classes.NavigationItemExitActive,
                exitDone: classes.NavigationItemExitDone,
            }}
            timeout={props.timeout}
        >
            <li ref={ref} className={classes.NavigationItem} onClick={props.click}>
                <NavLink
                    //activeClassName={classes.active}
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