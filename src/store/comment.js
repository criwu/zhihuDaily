import { requestLongComments, requestShortComments } from '../util/request'

const init = {
    long: [],
    short: [],
    length: 0
}
// long
const changeLongAction = (arr) => {
    return {
        type: 'changeLong',
        arr: arr
    }
}

export const requestLongAction = (id) => {
    return (dispatch, getState) => {
        requestLongComments(id).then(res => {
            dispatch(changeLongAction(JSON.parse(JSON.stringify(res.data.comments))))
        })
    }
}
// short
const changeShortAction = (arr) => {
    return {
        type: 'changeShort',
        arr: arr
    }
}

export const requestShortAction = (id) => {
    return (dispatch, getState) => {
        requestShortComments(id).then(res => {
            dispatch(changeShortAction(JSON.parse(JSON.stringify(res.data.comments))))
        })
    }
}


const commentReducer = (state = init, action) => {
    switch (action.type) {
        case 'changeLong':
            return {
                ...state,
                long: [...action.arr]
            }
        case 'changeShort':
            return {
                ...state,
                short: [...action.arr]
            }

        default:
            return state;
    }
}

export default commentReducer;

export const getLong = state => state.comment.long

export const getShort = state => state.comment.short

