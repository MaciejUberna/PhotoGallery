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
                        enter: classes.NavigationItemAEnter,
                        enterActive: classes.NavigationItemAEnterActive,
                        enterDone: classes.NavigationItemAEnterDone,
                        exit: classes.NavigationItemAExit,
                        exitActive: classes.NavigationItemAExitActive,
                        exitDone: classes.NavigationItemAExitDone,
                    }}
                    timeout={props.timeout}
                >
                    <div ref={ref} className={classes.NavigationItemA}>
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
                        appear: classes.NavigationItemPAppear,
                        appearActive: classes.NavigationItemPAppearActive,
                        appearDone: classes.NavigationItemPAppearDone,
                        enter: classes.NavigationItemPEnter,
                        enterActive: classes.NavigationItemPEnterActive,
                        enterDone: classes.NavigationItemPEnterDone,
                        exit: classes.NavigationItemPExit,
                        exitActive: classes.NavigationItemPExitActive,
                        exitDone: classes.NavigationItemPExitDone,
                    }}
                    timeout={props.timeout}
                    mountOnEnter={true}
                    unmountOnExit={true}
                >
                    <div ref={rear} className={classes.NavigationItemP}>
                        <p>{props.children}</p>
                    </div>
                </CSSTransition>
            </li>
    );
}
 
export default NavigationItem;