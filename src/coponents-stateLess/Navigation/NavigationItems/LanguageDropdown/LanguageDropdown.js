import React, {useContext, useRef} from 'react';
import LanguageContext from '../../../../mainStates/language/language-context';
import { useDetectOutsideClick } from "../../../../customHooks/clickListenerHook";

import cls from './LanguageDropdown.module.scss';

const LanguageDropdown = () => {
    const lctx = useContext(LanguageContext);
    let Flag = lctx.x.flag[lctx.x.language];

    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);
    const menuButtonsList = [];

    let dropdownMenuClass = isActive ? 
      `${cls.menu} ${cls.menu_container_active}` 
      : 
      `${cls.menu} ${cls.menu_container_inactive}`;

    const itemClick = (e) => {
      lctx.y(e);
      Flag = (lctx.x.flag[lctx.x.language]);
      setIsActive(!isActive);
    };

    for(let key in lctx.x.flag) {
      const Item = lctx.x.flag[key];
      menuButtonsList.push(
        <li key={key+'y'} onClick={itemClick.bind(this,key)}>
          <Item key={key+'x'} className={cls.menu_svg}/>&nbsp;{lctx.x.languages[key]}
        </li>
      );
    };

    return (
        <div className={cls.menu}>
          <div className={cls.menu_container}>
            <button onClick={onClick} className={cls.menu_trigger}>
            {Flag
              ?
              <div className={cls.menu_svg_text}> 
                <Flag className={cls.menu_svg}/>
                &nbsp;<span>{lctx.x.mainMenu[lctx.x.language].lang}</span>
                &nbsp;<div className={cls.menu_triangle}></div>
              </div>
              : 
              null
            }
            </button>
            <nav
              ref={dropdownRef}
              className={dropdownMenuClass}
            >
              <ul>
                {menuButtonsList}
              </ul>
            </nav>
          </div>
        </div>
    );
};

export default LanguageDropdown;

