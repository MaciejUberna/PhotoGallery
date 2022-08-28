import React, {useRef, useEffect} from 'react';
import { useParams, useLocation, useNavigate, NavLink, Link } from 'react-router-dom';
import { useStore } from '../../../store-hooks/store';
import userConfig from '../../../assets/config/userConfig';
import cls from  './Gallery.module.scss';

const Gallery = () => {

    const location = useLocation();
    const params = useParams();
    const navigate = useNavigate();
    const navigateRef = useRef({ navigate });
    const savedParams = useStore()[0];
    const dispatch = useStore(false)[1];
    let dynamicMenu = null;
    let header = "Loading gallery...";

    console.log('savedParams: ',savedParams);

    useEffect(() => {
        navigateRef.current.navigate = navigate;
        if(
            savedParams.currUrl !== '' &&
            savedParams.currUrl.length > location.pathname.length
        ) {
            console.log('Xlocation.path:',location.pathname,'XsavedPath:',savedParams.currUrl);
            navigateRef.current.navigate(savedParams.currUrl, { replace: true });
        };
    },[navigate,location.pathname,savedParams.currUrl]);

    const loadImages = (images) => {
        if(images !== null && images!=='') {
            const url = location.pathname;
            return (
                <div className={cls.MainB}>
                    {
                        images.map( (image, index) =>
                            <Link to={url+'/'+image} key={'pic'+index} >
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
            const url = location.pathname;
            return (
                <div className={cls.MainA}>
                    {
                        dirList.map( dir =>
                            <NavLink
                            className={({isActive}) => isActive ? cls.active : ''}
                            to={url+'/'+dir}
                            key={url+'/'+dir}
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
            if(params.year !== savedParams.params[0]) {
                dispatch('UPDATE_GALLERY_YEAR',params.year);
                dispatch('UPDATE_URL',location.pathname);
            }
        if(params.month) {
            if(params.month !== savedParams.params[1]) {
                dispatch('UPDATE_GALLERY_MONTH',params.month);
                dispatch('UPDATE_URL',location.pathname);
            }
            if(params.day) {
                if(params.day !== savedParams.params[2]) {
                    dispatch('UPDATE_GALLERY_DAY',params.day);
                    dispatch('UPDATE_URL',location.pathname);
                }
                if(params.pic) {
                    if(params.pic !== savedParams.params[3]) {
                        dispatch('UPDATE_GALLERY_PIC',params.pic);
                        dispatch('UPDATE_URL',location.pathname);
                    }
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
                header="Pick a day of the month:";             
            }
        } else {
            const dirs = require(
            '../../../assets/'
            +userConfig.startGalleryDir
            +'/'+params.year
            +'/dirsloader'
            ).default;
            dynamicMenu = loadDirs(dirs);
            header="Pick the month from which photos will be displayed:";
        }
    } else {
        const dirs = require(
            '../../../assets/'
            +userConfig.startGalleryDir
            +'/dirsloader'
        ).default;
        dynamicMenu = loadDirs(dirs);
        header="Pick the year from which photos will be displayed:";
    }

    return (
        <div className={`${cls.Main}`}>
            <h2>{header}</h2>
            <React.Fragment>
                {dynamicMenu}
            </React.Fragment>
            <div></div>
        </div>
    );
}
export default Gallery;