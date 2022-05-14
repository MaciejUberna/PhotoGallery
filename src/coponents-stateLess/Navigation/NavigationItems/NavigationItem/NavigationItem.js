import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import classes from './NavigationItem.module.scss';
 
const NavigationItem = props => {
    const ref = useRef(null);
    const rear = useRef(null);

    return (
            <li className={classes.NavigationItem} onClick={props.click}>
                <CSSTransition
                    nodeRef={ref}
                    in={props.starter}
                    classNames={{
                        enter: classes.NavigationItemXEnter,
                        enterActive: classes.NavigationItemXEnterActive,
                        enterDone: classes.NavigationItemXEnterDone,
                        exit: classes.NavigationItemXExit,
                        exitActive: classes.NavigationItemXExitActive,
                        exitDone: classes.NavigationItemXExitDone,
                    }}
                    timeout={props.timeout}
                >
                    <div ref={ref} className={classes.NavigationItemX}>
                        <NavLink
                            //activeClassName={classes.active}
                            className={({isActive}) => isActive ? classes.active : ''}
                            to={props.link}
                            exact={props.exact}
                        >
                            {props.children}
                        </NavLink>
                    </div>
                </CSSTransition>
                <CSSTransition
                    nodeRef={rear}
                    in={props.starter}
                    classNames={{
                        appear: classes.NavigationItemYAppear,
                        appearActive: classes.NavigationItemYAppearActive,
                        appearDone: classes.NavigationItemYAppearDone,
                        enter: classes.NavigationItemYEnter,
                        enterActive: classes.NavigationItemYEnterActive,
                        enterDone: classes.NavigationItemYEnterDone,
                        exit: classes.NavigationItemYExit,
                        exitActive: classes.NavigationItemYExitActive,
                        exitDone: classes.NavigationItemYExitDone,
                    }}
                    timeout={props.timeout}
                    mountOnEnter={true}
                    unmountOnExit={true}
                >
                    <div ref={rear} className={classes.NavigationItemY}>
                        <p>{props.children}</p>
                    </div>
                </CSSTransition>
            </li>
    );
}
 
export default NavigationItem;