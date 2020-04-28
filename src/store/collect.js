// 定义初始状态
const init = {
    collection: []
}

// 触发
// export const isCollect=> { }

export const addCollectionAction = (story) => {
    console.log(story);

    return {
        type: 'addCollection',
        story: story
    }
}
export const delCollectionAction = (id) => {
    return {
        type: 'delCollection',
        id: id
    }
}
const collectionReducer = (state = init, action) => {
    switch (action.type) {
        case 'addCollection':
            console.log('tianjia');

            return {
                ...state,
                collection: [...state.collection, action.story]
            }

        case 'delCollection':
            const { collection } = state
            let index = collection.findIndex(val => val.id === action.id)
            collection.splice(index, 1)
            return {
                ...state,
                collection: [...collection]
            }
        default:
            return state
    }
}
export default collectionReducer
// 导出状态
export const getCollection = (state) => {
    console.log(state.collect.collection);

    return state.collect.collection
}

