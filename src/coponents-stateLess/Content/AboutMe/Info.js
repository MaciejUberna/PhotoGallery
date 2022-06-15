import React from 'react';
import userData from '../../../assets/config/userConfig';
import cls from './Info.module.scss';

const Omnie = () => {
    return (
        <div className={cls.Main}>
        <h2>This page is about {userData.name} {userData.surname} </h2>
        <h4>
        Spicy jalapeno bacon ipsum dolor amet sed kevin pig est 
        bacon pork loin porchetta consequat ullamco corned beef minim eu. 
        Tail est commodo dolor, in boudin hamburger deserunt. 
        Pork chop commodo nisi jowl, 
        sausage chicken pork drumstick leberkas in beef ribs filet mignon magna pancetta shoulder. 
        Ut in incididunt ea salami turkey anim short ribs duis rump meatball pariatur buffalo dolor. 
        Shank fugiat doner, 
        id aliquip culpa meatball ham tenderloin pariatur aute commodo fatback adipisicing proident. 
        Sausage aliquip ball tip, 
        pork excepteur drumstick boudin minim proident capicola beef ribs pancetta ipsum chicken 
        eiusmod.
        </h4>
        <p>
        Pastrami magna beef commodo deserunt esse cillum t-bone bacon laborum ut bresaola ipsum 
        fatback burgdoggen. Strip steak do aliqua ut, capicola meatball in. Lorem fugiat turducken
         do veniam. Frankfurter boudin ball tip aute ipsum. Ham non adipisicing, 
         prosciutto dolor tail consectetur enim t-bone labore ground round brisket laboris.
        </p>
        <p>
        Laboris sausage cillum, ball tip fatback flank shankle. 
        Alcatra commodo ea, strip steak ut labore laboris. 
        Deserunt beef id kevin. Ipsum jowl nisi elit ribeye doner exercitation strip steak. 
        Brisket proident nulla jowl, laborum hamburger buffalo lorem capicola incididunt. 
        Laborum non aliqua venison exercitation.
        </p>
        <div></div>
        </div>
    );
}

export default Omnie;