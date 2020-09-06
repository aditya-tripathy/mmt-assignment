import StoreAction from './store-action';

const INITIAL_STATE = {
    data: localStorage.getItem('folderDs') ? JSON.parse(localStorage.getItem('folderDs')) : [],
};

const setData = function (state, action) {
    return {
        ...state,
        data: action.data
    }
}


export default (state = INITIAL_STATE, action) => {
    if (action.error) {
        return state;
    }
    switch (action.type) {
        case StoreAction.CREATE_STORE_DATA:
            return setData(state, action);
        default:
            return state;
    }
};