let filters = {
    /**
     * @desc 文字超过长度以 "..." 显示
     * @param {String} val 要截取的值
     * @param {Number} length 要截取长度
     * @date 2020-06-17 11:13:24
     * @author Dulongfei
     *
     */
    ellipsis(val,length=20){
        let reg = new RegExp(`(.{${length}})(.*)`)
        return val.replace(reg,'$1 ...')
    }
}

export default {
    install(Vue){
        for(let key in filters){
            Vue.filter(key,filters[key])
        }
    }
}