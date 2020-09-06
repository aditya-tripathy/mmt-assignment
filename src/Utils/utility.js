export const buildHierarchy = (arry) => {

    let roots = [], children = {};

    // find the top level nodes and hash the children based on parent
    for (let i = 0, len = arry.length; i < len; ++i) {
        let item = arry[i],
            p = item.Parent,
            target = !p ? roots : (children[p] || (children[p] = []));

        target.push({ value: item });
    }

    // function to recursively build the tree
    let findChildren = function (parent) {
        if (children[parent.value.Id]) {
            parent.children = children[parent.value.Id];
            for (let i = 0, len = parent.children.length; i < len; ++i) {
                findChildren(parent.children[i]);
            }
        }
    };

    // enumerate through to handle the case where there are multiple roots
    for (let i = 0, len = roots.length; i < len; ++i) {
        findChildren(roots[i]);
    }

    return roots;
}


export const BuildReverseHierarchyWithId = (array, id) => {
    let roots = [];
    let parentObj = {};
    array.forEach(it => {
        parentObj[it.id] = it;
    })
    function findParent(eleId) {
        let itemData = null;
        if (parentObj && parentObj.hasOwnProperty(eleId)) {
            itemData = parentObj[eleId];
        }
        if (itemData.parent) {
            findParent(itemData.parent);
        }
        roots.push(itemData);
        return false;
    }
    findParent(id);
    return roots;
}