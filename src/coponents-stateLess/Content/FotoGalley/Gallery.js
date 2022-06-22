import React from 'react';
import userConfig from '../../../assets/config/userConfig';
import cls from  './Gallery.module.scss';

const Projekty = () => {

    function importDirs(dir) {
        let images = [];
        dir.keys().map((item) => { 
            //console.log('dir:',dir(item));
            images.unshift(dir(item)); 
            return null;
        });
        return images;
    }

    const dirs = importDirs(
        require.context('../../../assets/images/Photos/2022/05/31', false, /^.+$/)
    );

    // const images = importAll(
    //     require.context('../../../assets/images/2022/05/20', false, /\.(png|jpe?g)$/)
    // );
    // return (
    //     <div className={`${cls.Main}`}>
    //         <h2>Here are test images</h2>
    //         <React.Fragment>
    //             {images.map(
    //                 (img, idx) => (
    //                     <img alt={"obrazek"+idx} key={"obrs"+idx} src={img}/>
    //                 )
    //             )}
    //         </React.Fragment>
    //     </div>
    // );

    return (
        <div className={`${cls.Main}`}>
            <h2>Test dirs</h2>
            <React.Fragment>
                {dirs.map(
                    (path, idx) => (
                        <p key={"obrs"+idx}> {path} </p>
                    )
                )}
            </React.Fragment>
        </div>
    );
}
export default Projekty;