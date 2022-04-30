import React, { useState } from "react";
import { TransitionGroup } from "react-transition-group";
import classes from "./NavigationItems.module.scss";
import NavigationItem from "./NavigationItem/NavigationItem"

const data = [
    {in:false, id:0, desc:"About me",href:"/photo-gallery/info"},
    {in:false, id:1, desc:"Photo gallery",href:"/photo-gallery/photos"},
    {in:false, id:2, desc:"Some tests",href:"/photo-gallery/education"}
];

const NavigationItems = () => {

    const [allButtons, setAllButtons] = useState(data);
    const [prevButton, setPrevButton] = useState({
        in:false, id:-1, desc:"",href:""
    });

    const allButtonsDeepUpdate = (idx, obj) => {
        const allButtonsCpy = [];
        for(let i=0;i<allButtons.length;i++) {
            if(i===idx) {
                allButtonsCpy.push(Object.assign({},obj));
            } else if (i===prevButton.id) {
                allButtonsCpy.push(Object.assign({},prevButton));
            } else {
                allButtonsCpy.push(Object.assign({},allButtons[i]));
            };
        };
        setAllButtons(allButtonsCpy);
     };

    const enterAnimation = (idx) => {
        //this contition checks if button wasn't already animated.
        if(allButtons[idx].id !== prevButton.id) {
            const newButton = {...allButtons[idx], ...{in:true}};
            if (prevButton.id !== -1)
                setPrevButton({...prevButton,...{in:false}});
            allButtonsDeepUpdate(idx, newButton);
            setPrevButton(Object.assign({},allButtons[idx]));
        }
    };

    return ( 
            <div>   
            <TransitionGroup component="ul" className={classes.NavigationItems}>
                {allButtons.map((button) => (
                    <NavigationItem
                        key={button.id}
                        ref={React.createRef()}
                        starter={button.in}
                        timeout={1000}
                        click={enterAnimation.bind(this,button.id)}
                        link={button.href}
                    >
                        {button.desc}
                    </NavigationItem>
                ))}
            </TransitionGroup>
            </div>
    );
};
 
export default NavigationItems;