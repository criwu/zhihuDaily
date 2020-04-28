import axios from 'axios'

axios.interceptors.response.use(res => {
    console.log(res);

    return res
})

// banner+today stories
export const requestStories = () => {
    return axios({
        url: '/api/4/stories/latest'
    })
}

// 获取之前的消息 例如:20190613
export const requestBeforeStories = (time) => {
    return axios({
        url: '/api/4/stories/before/' + time
    })
}

// 获取详情页id
export const requestDetail = (id) => {
    return axios({
        url: '/api/4/story/' + id
    })
}

// 获取长评 
export const requestLongComments = (id => {
    return axios({
        url: `/api/4/story/${id}/long-comments`
    })
})

// 获取短评
export const requestShortComments = (id => {
    return axios({
        url: `/api/4/story/${id}/short-comments`
    })
})