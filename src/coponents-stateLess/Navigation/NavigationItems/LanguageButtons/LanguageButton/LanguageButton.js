import React, {useContext} from 'react';
import cls from './LanguageButton.module.scss'
import LanguageContext from '../../../../../mainStates/language/language-context';

const Button = props => {
    const lctx = useContext(LanguageContext);
    
    const clickHandler = () => {
        lctx.y(props.stateLang);
    };

    return (
        <div className={cls.Button} onClick={clickHandler}>
            {props.flag 
                ? 
                <props.flag viewBox="95 18 450 450" className={cls.Button__Flag} /> 
                : null
            }
            <div className={cls.Button__Lang}> {props.children} </div>
        </div>
    );
};

export default Button;