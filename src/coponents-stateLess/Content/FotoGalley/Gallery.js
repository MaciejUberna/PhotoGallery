import React from 'react';
import cls from  './Gallery.module.scss';
const Projekty = () => {
    function importAll(dir) {
        let images = [];
        dir.keys().map((item) => { images.unshift(dir(item)); return null;});
        return images;
    }
    const images = importAll(
        require.context('../../../assets/images/2022/05/20', false, /\.(png|jpe?g)$/)
    );
    return (
        <div className={`${cls.Main}`}>
            <h2>Here are test images</h2>
            <React.Fragment>
                {images.map(
                    (img, idx) => (
                        <img alt={"obrazek"+idx} key={"obrs"+idx} src={img}/>
                    )
                )}
            </React.Fragment>
        </div>
    );
}
export default Projekty;