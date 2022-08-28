import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useStore } from '../../../store-hooks/store';
import Photo from '../../UI/MainPhoto/Photo';
import AboutMe from './AboutMeToolbar/AboutMe';
import PropTypes from 'prop-types';
import classes from './Toolbar.module.scss';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
 
const Toolbar = props => {
    let contextMenu = (<p>Loading...</p>);
    const navigate = useNavigate();
    const p = useStore()[0];
    const dispatch = useStore(false)[1];
    const galleryBaseURL = '/photo-gallery/photos';

    const goBackGallery = _ => {
        let url = galleryBaseURL;
        if(p.currPos>0) {
            for(let i=0;i<p.currPos-1;i++) {
                url += '/';
                url += p.params[i];
            }
            dispatch('UPDATE_CURPOS',p.currPos-1);
            dispatch('UPDATE_URL',url);
            navigate(url, {replace : true} );
        }
    }

    const goForwardGallery = _ => {
        let url = galleryBaseURL;
        if(p.currPos<p.rembPos) {
            for(let i=0;i<p.currPos+1;i++) {
                url += '/';
                url += p.params[i];
            }
            dispatch('UPDATE_CURPOS',p.currPos+1);
            dispatch('UPDATE_URL',url);
            navigate(url, {replace : true} );
        }
    }

    const subPathMatcher = str => {
        switch(true) {
            case /^\/photo-gallery\/info/.test(str):
                contextMenu = <AboutMe/>;
                break;
            case /^\/photo-gallery\/photos/.test(str):
                let tmp = [<p>...</p>];
                let leftArrowStyle = classes.arrowLeft;
                let rightArrowStyle = classes.arrowRight;
                if(p.currPos < p.rembPos) rightArrowStyle = classes.arrowRight+' '+classes.arrowRight_A;
                if(p.currPos>0) {
                    leftArrowStyle = classes.arrowLeft+' '+classes.arrowLeft_A;
                    tmp = [];
                    for(let i=0;i<p.currPos;i++){
                        if(i+1!==p.currPos && p.params[i+1]!==null) {
                            tmp.push(<p key={'p'+i}>{p.params[i]}-&gt;</p>);
                        } else {
                            tmp.push(<p key={'p'+i}>{p.params[i]}</p>);
                        }
                    }
                }
                contextMenu = (
                <React.Fragment>
                    <div key='ArrowLeft' onClick={goBackGallery} className={leftArrowStyle}></div>
                        {tmp}
                    <div key='ArrowRight' onClick={goForwardGallery} className={rightArrowStyle}></div>
                </React.Fragment>
                );
                break;
            case /^\/photo-gallery\/blog/.test(str):
                contextMenu = (
                    <p>Not implemented yet...</p>
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