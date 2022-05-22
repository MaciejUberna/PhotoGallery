import React from 'react';

const Info = React.lazy(() => {
    return import('../coponents-stateLess/Content/AboutMe/Info');
});

const Gallery = React.lazy(() => {
    return import('../coponents-stateLess/Content/FotoGalley/Gallery');
});

const Blog = React.lazy(() => {
    return import('../coponents-stateLess/Content/Blog/Blog');
});

const data = [
    {in:false, id:0, desc:"About me",href:"/photo-gallery/info",element:<Info/>},
    {in:false, id:1, desc:"Photo gallery",href:"/photo-gallery/photos",element:<Gallery/>},
    {in:false, id:2, desc:"Blog",href:"/photo-gallery/blog",element:<Blog/>}
];

export default data;