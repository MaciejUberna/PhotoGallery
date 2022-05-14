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
                        enter: classes.NavigationItemEnter,
                        enterActive: classes.NavigationItemEnterActive,
                        enterDone: classes.NavigationItemEnterDone,
                        exit: classes.NavigationItemExit,
                        exitActive: classes.NavigationItemExitActive,
                        exitDone: classes.NavigationItemExitDone,
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
                        appear: classes.NavigationItemRAppear,
                        appearActive: classes.NavigationItemRAppearActive,
                        appearDone: classes.NavigationItemRAppearDone,
                        enter: classes.NavigationItemREnter,
                        enterActive: classes.NavigationItemREnterActive,
                        enterDone: classes.NavigationItemREnterDone,
                        exit: classes.NavigationItemRExit,
                        exitActive: classes.NavigationItemRExitActive,
                        exitDone: classes.NavigationItemRExitDone,
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