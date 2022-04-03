import React, {useContext} from 'react';
import cls from './LanguageButtons.module.scss'
import Button from'./LanguageButton/LanguageButton';
import languageContext from '../../../../mainStates/language/language-context';

const Buttons = () => {
    const lctx = useContext(languageContext);
    const buttons = [];

    for(let key in lctx.x.flag) {
        buttons.push(
            <Button key={key} flag={lctx.x.flag[key]} stateLang={key}>
                {lctx.x.languages[key]}
            </Button>
        );
    };

    return (
        <div className={cls.ButtonList}>
            {buttons}
        </div>
    );
};

export default Buttons;

