import { createSelector } from 'reselect';
import { BuildReverseHierarchyWithId } from '../../Utils/utility';

export const selectAllHomeData = createSelector(
    (state) => state.storeReducer,
    (storeReducer) => {
        return storeReducer.data.filter(data => data.parent === null);
    }
);

export const selectAllData = createSelector(
    (state) => state.storeReducer,
    (storeReducer) => {
        return storeReducer.data;
    }
);

export const singleFolderData = function (state, parentId) {
    if (state.storeReducer) {
        return state.storeReducer.data.filter(data => data.parent === parentId);
    }
}

export const currentFolderData = function (state, parentId) {
    if (state.storeReducer) {
        let findIndex = state.storeReducer.data.findIndex(t => t.id === parentId);
        if (findIndex >= 0) {
            return state.storeReducer.data[findIndex];
        } else {
            return null;
        }
    }
}

export const breadCrumpData = function (state, itemId) {
    return BuildReverseHierarchyWithId(state.storeReducer.data, itemId)
}