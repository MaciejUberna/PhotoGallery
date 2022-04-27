import React, { useState } from 'react';
import { TransitionGroup } from "react-transition-group";
import classes from './NavigationItems.module.scss'
import NavigationItem from './NavigationItem/NavigationItem';
// ñ
const data = [
    {in:false, id:"0", desc:"O mnie",href:"/photo-gallery/info"},
    {in:false, id:"1", desc:"Galeria zdjęć",href:"/photo-gallery/photos"},
    {in:false, id:"2", desc:"Edukacja",href:"/photo-gallery/education"}
];

const NavigationItems = () => {

    const [state, setState] = useState(data);
    const [prevButton, setPrevButton] = useState(-1);

    const stateDeepCopy = () => {
        const copied = [];
        for(let i=0;i<state.length;i++){
            copied.push(Object.assign({},state[i]));
        };
        //console.log("Copied state=",copied);
        return copied;
    };

    const exitAnimation = () => {
        const x = stateDeepCopy();
        const idx = state.findIndex((obj => {
            return obj.id.includes("a");
        }));
        if(idx!==-1){
            x[idx].id = x[idx].id.replace("a","");
            x[idx].in = true;
            return x;
        } else return x;
    };

    const enterAnimation = (idx) => {
        if(!idx.includes("a")) {
            const x = exitAnimation();
            x[idx].id += "a";
            x[idx].in = true;
            setState(x);
        };
    };

    return ( 
            <div>   
            <TransitionGroup component="ul" className={classes.NavigationItems}>
                {state.map((s) => (
                    <NavigationItem
                        starter={s.in}
                        pkey={s.id}
                        timeout={1000}
                        click={enterAnimation.bind(this,s.id)}
                        link={s.href}
                    >
                        {s.desc}
                    </NavigationItem>
                ))}
            </TransitionGroup>
            </div>
    );
};
 
export default NavigationItems;