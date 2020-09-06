const shortid = require('shortid');

export default class StoreAction {

    static CREATE_STORE_DATA = 'CREATE_STORE_DATA';

    static setStoreData = (data) => {
        return {
            type: StoreAction.CREATE_STORE_DATA,
            data: data
        };
    }

    static setFolderData = (folderName, parent = null) => {
        return (dispatch, getState) => {
            console.log('getState: ', getState());
            let data = [...getState().storeReducer.data];
            data.push({
                name: folderName,
                id: shortid.generate(),
                parent: parent
            })
            localStorage.setItem('folderDs', JSON.stringify(data));
            dispatch(StoreAction.setStoreData(data));
        }
    };

    static setFileData = (file, eleId) => {
        console.log('file: ', file);
        return (dispatch, getState) => {
            let data = [...getState().storeReducer.data];
            let findIndex = data.findIndex(it => it.id === eleId);
            if (findIndex >= 0) {
                let modifiabLeData = data[findIndex];
                if (modifiabLeData.data && modifiabLeData.data.length > 0) {
                    modifiabLeData.data.push(file);
                } else {
                    modifiabLeData.data = [file];
                }
                data[findIndex] = modifiabLeData;
                localStorage.setItem('folderDs', JSON.stringify(data));
                dispatch(StoreAction.setStoreData(data));
            }
        }
    };

    static setChildData = (parentId, folderName) => {
        return (dispatch, getState) => {
            console.log('getState: ', getState());
            let data = [...getState().storeReducer.data];
            data.push({
                name: folderName,
                id: shortid.generate()
            })
            localStorage.setItem('folderDs', JSON.stringify(data));
            dispatch(StoreAction.setStoreData(data));
        }
    };

}