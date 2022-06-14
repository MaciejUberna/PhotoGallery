import {initStore} from './store';

const configureStore = () => {
    const actions = {
        PICK_INTERFACE: (interfaceName) => {
            return {curInterface: interfaceName};
        },
        UPDATE_ABOUT_ME_INFO: (curState, myData) => {
            const aboutMe = {...curState.about_me, ...myData};
            return {about_me: aboutMe};
        },
        SET_GALLERY_DIR: (curState, myDir) => {
            const dir = curState.gallery.dir;
            return {...dir, dir: myDir};
        },
        SET_GALLERY_YEAR: (curState, myYear) => {
            const year = curState.gallery.year.value;
            return {...year, value: myYear};          
        },
        SET_GALLERY_MONTH: (curState, myMonth) => {
            const month = curState.gallery.month.value;
            return {...month, value: myMonth}            
        },
        SET_GALLERY_DAY: (curState, myDay) => {
            const day = curState.gallery.day.value;
            return {...day, value: myDay} 
        },
        SET_BLOG_DIR: () => {
            const dir = curState.blog.dir;
            return {...dir, dir: myDir};
        },
        SET_BLOG_YEAR: (curState, myYear) => {
            const year = curState.blog.year.value;
            return {...year, value: myYear};          
        },
        SET_BLOG_MONTH: (curState, myMonth) => {
            const month = curState.blog.month.value;
            return {...month, value: myMonth}            
        },
        SET_BLOG_DAY: (curState, myDay) => {
            const day = curState.blog.day.value;
            return {...day, value: myDay} 
        }
    };

    initStore(actions,{ 
            curInterface : "about_me",
            about_me : {
                name: 'anonimous',
                surname: 'anonimous',
                email: 'unknown',
                phone: 'unknown'
            },
            gallery : {
                dir : null,
                year: {
                    visible : false,
                    elementType: 'select',
                    elementConfig: {
                        options: [
                            // {value: '2022', displayValue: '2022'},
                        ],
                        placeholder: 'Rok fotografowania'
                    },
                    children: '',
                    value: null,
                    validation: {},
                    valid: true
                },
                month: {
                    visible : false,
                    elementType: 'select',
                    elementConfig: {
                        options: [

                        ],
                        placeholder: 'Miesiąc fotografowania'
                    },
                    children: '',
                    value: null,
                    validation: {},
                    valid: true
                },
                day: {
                    visible : false,
                    elementType: 'select',
                    elementConfig: {
                        options: [

                        ],
                        placeholder: 'Dzień fotografowania'
                    },
                    children: '',
                    value: null,
                    validation: {},
                    valid: true
                }
            },
            blog : {
                dir : null,
                year: {
                    visible : false,
                    elementType: 'select',
                    elementConfig: {
                        options: [
                            // {value: '2022', displayValue: '2022'},
                        ],
                        placeholder: 'Rok blogowania'
                    },
                    children: '',
                    value: null,
                    validation: {},
                    valid: true
                },
                month: {
                    visible : false,
                    elementType: 'select',
                    elementConfig: {
                        options: [

                        ],
                        placeholder: 'Miesiąc blogowania'
                    },
                    children: '',
                    value: null,
                    validation: {},
                    valid: true
                },
                day: {
                    visible : false,
                    elementType: 'select',
                    elementConfig: {
                        options: [

                        ],
                        placeholder: 'Dzień blogowania'
                    },
                    children: '',
                    value: null,
                    validation: {},
                    valid: true
                }                
            }
        }
    );
};

export default configureStore;
