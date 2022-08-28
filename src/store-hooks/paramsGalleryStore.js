import {initStore} from './store';

const configureStore = () => {
    const actions = {
        UPDATE_GALLERY_YEAR: (curState, value) => {
            const updatedState = {...curState};
            updatedState.currPos = 1;
            updatedState.rembPos = 1;
            const updatedGalleryLst = [
                ...updatedState.params
            ];
            updatedGalleryLst[0]=value;
            for(let i=1;i<updatedGalleryLst.length;i++)
                updatedGalleryLst[i]=null;
            return {...updatedState, params : updatedGalleryLst}         
        },
        UPDATE_GALLERY_MONTH: (curState, value) => {
            const updatedState = {...curState};
            updatedState.currPos = 2;
            updatedState.rembPos = 2;
            const updatedGalleryLst = [
                ...updatedState.params
            ];
            updatedGalleryLst[1]=value;
            for(let i=2;i<updatedGalleryLst.length;i++)
                updatedGalleryLst[i]=null;
            return {...updatedState, params : updatedGalleryLst}         
        },
        UPDATE_GALLERY_DAY: (curState, value) => {
            const updatedState = {...curState};
            updatedState.currPos = 3;
            updatedState.rembPos = 3;
            const updatedGalleryLst = [
                ...updatedState.params
            ];
            updatedGalleryLst[2]=value;
            for(let i=3;i<updatedGalleryLst.length;i++)
                updatedGalleryLst[i]=null;
            return {...updatedState, params : updatedGalleryLst}         
        },
        UPDATE_GALLERY_PIC: (curState, value) => {
            const updatedState = {...curState};
            updatedState.currPos = 4;
            updatedState.rembPos = 4;
            const updatedGalleryLst = [
                ...updatedState.params
            ];
            updatedGalleryLst[3]=value;
            return {...updatedState, params : updatedGalleryLst}         
        },
        UPDATE_URL: (curState, value) => {
            const updatedState = {...curState};
            updatedState.currUrl = value;
            return updatedState;
        },
        UPDATE_CURPOS: (curState, value) => {
            const updatedState = {...curState};
            updatedState.currPos = value;
            return updatedState;
        }
    };
    initStore(actions,{
            params: [
                null,
                null,
                null,
                null
            ],
            currPos:0,
            rembPos:0,
            currUrl:''
        }
    );
};

export default configureStore;
