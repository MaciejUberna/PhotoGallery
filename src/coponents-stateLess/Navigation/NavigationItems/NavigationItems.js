import React, { useState } from "react";
import { TransitionGroup } from "react-transition-group";
import classes from "./NavigationItems.module.scss";
import routerButtons from "../../../router/mainMenu";
import NavigationItem from "./NavigationItem/NavigationItem"

const NavigationItems = () => {

    const [allButtons, setAllButtons] = useState(routerButtons);
    const [prevButton, setPrevButton] = useState({
        in:false, id:-1, desc:"",href:"",element:null
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
        <TransitionGroup component="ul" className={classes.NavigationItems}>
            {allButtons.map((button) => (
                <NavigationItem
                    key={button.id}
                    starter={button.in}
                    timeout={1000}
                    click={enterAnimation.bind(this,button.id)}
                    link={button.href}
                >
                    {button.desc}
                </NavigationItem>
            ))}
        </TransitionGroup>
    );
};
 
export default NavigationItems;