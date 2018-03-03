/**
 * 将每种错误都编辑成一种编码
 */

const options = {
    "0":{ // 成功状态码
        code: "0",
        desc: '',
        sug: ''
    },
    "1001": {
        code:'1001',
        desc:"用户已存在",
        sug: ''
    },
    "1002": {
        code: '1002', // 错误编码
        desc: '用户名或密码错误',// 描述
        sug: '请重新输入用户名和密码'// 建议
    }
}

module.exports = function(key){
    return options[key] || {
        code: -1,
        desc: "未知错误"
    }
}