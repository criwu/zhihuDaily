import { requestStories } from '../util/request'

const initState = {
    stories: {}
}

// stories
const changeStoriesAction = (json) => {
    return {
        type: 'storiesAction',
        stories: json
    }
}

export const requestStoriesAction = () => {
    return (dispatch, getState) => {
        // 缓存
        const { stories } = getState().stories
        if (JSON.stringify(stories) !== '{}') {
            return
        }
        requestStories().then(res => {
            dispatch(changeStoriesAction(res.data))
        })
    }
}

const storiesReducer = (state = initState, action) => {
    switch (action.type) {
        case 'storiesAction':
            return {
                ...state,
                stories: action.stories
            }
        default:
            return state;
    }
}

export default storiesReducer

// 导出状态
export const getStories = state => {
    return state.stories.stories
}
