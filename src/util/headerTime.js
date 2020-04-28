function headerTime(date) {
    let month = date.getMonth()
    let arrMonth = ['一月', '二月 ', '三月', '四月', '五月', '六月 ', '七月', '八月', '九月', '十月', '十一月', '十二月']
    let day = date.getDate()
    let hours = date.getHours();
    let text = ''
    if (hours >= 0 && hours <= 10) {
        text = `早上好`;
    } else if (hours > 10 && hours <= 14) {
        text = `中午好`;
    } else if (hours > 14 && hours <= 18) {
        text = `下午好`;
    } else if (hours > 18 && hours <= 24) {
        text = `晚上好`;
    }
    let t = {
        month: arrMonth[month],
        day,
        text
    }
    return t
}

export default headerTime