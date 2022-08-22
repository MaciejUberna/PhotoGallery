import React from 'react';
import { useParams, useLocation, NavLink, Link } from 'react-router-dom';
import userConfig from '../../../assets/config/userConfig';
import cls from  './Gallery.module.scss';

const Gallery = () => {

    const location = useLocation();
    const params = useParams();
    let dynamicMenu = null
    let header = "Loading gallery..."

    const loadImages = images => {
        if(images !== null && images!='') {
            let href = location.pathname;
            return (
                <div className={cls.MainB}>
                    {
                        images.map( (image, index) =>
                            <Link to={href+'/'+image} key={'pic'+index} >
                                <img 
                                src={require(
                                '../../../assets/'
                                +userConfig.startGalleryDir
                                +'/'+params.year
                                +'/'+params.month
                                +'/'+params.day
                                +'/'+image)} 
                                alt={'obrazek '+index} 
                            />
                            </Link>
                        )
                    }
                </div>
            )
        } else {return null;}
    }

    const showImage = _ => {
        return (
            <div className={cls.MainC}>
                <img 
                    src={require(
                            '../../../assets/'
                            +userConfig.startGalleryDir
                            +'/'+params.year
                            +'/'+params.month
                            +'/'+params.day
                            +'/'+params.pic
                    )} 
                    alt={'obr_'+params.pic} 
                />
            </div>
        );
}

    const loadDirs = (dirList) => {
        if(dirList !== null && dirList !== '') {
            let href = location.pathname;
            return (
                <div className={cls.MainA}>
                    {
                        dirList.map( dir =>
                            <NavLink
                            className={({isActive}) => isActive ? cls.active : ''}
                            to={href+'/'+dir}
                            key={href+'/'+dir}
                            >
                                {dir}
                            </NavLink>
                        )
                    }
                </div>
            );
        } else {return null;}
    }

    if (params.year) {
        if(params.month) {
            if(params.day) {
                if(params.pic) {
                    dynamicMenu = showImage();
                    header="Current image:  "+params.pic;
                } else {
                    const images = require(
                        '../../../assets/'
                        +userConfig.startGalleryDir
                        +'/'+params.year
                        +'/'+params.month
                        +'/'+params.day
                        +'/imageloader'
                        ).default;
                    dynamicMenu = loadImages(images);
                    header="Choose photo to enlarge:";
                }
            } else {
                const dirs = require(
                '../../../assets/'
                +userConfig.startGalleryDir
                +'/'+params.year
                +'/'+params.month
                +'/dirsloader'
                ).default;
                dynamicMenu = loadDirs(dirs); 
                header="Pick day of the month:";             
            }
        } else {
            const dirs = require(
            '../../../assets/'
            +userConfig.startGalleryDir
            +'/'+params.year
            +'/dirsloader'
            ).default;
            dynamicMenu = loadDirs(dirs);
            header="Pick month from which photos will be displayed:";
        }
    } else {
        const dirs = require(
            '../../../assets/'
            +userConfig.startGalleryDir
            +'/dirsloader'
        ).default;
        dynamicMenu = loadDirs(dirs);
        header="Pick year from which photos will be displayed:";
    }

    return (
        <div className={`${cls.Main}`}>
            <h2>{header}</h2>
            <React.Fragment>
                {dynamicMenu}
            </React.Fragment>
        </div>
    );
}
export default Gallery;