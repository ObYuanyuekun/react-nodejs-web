/* axios拦截器加载 */
import axios from "axios"
import { Toast } from "antd-mobile"

/* 拦截请求 */
axios.interceptors.request.use(function (config) {
    Toast.loading('加载中',0)
    return config
})

/* 拦截相应 */
axios.interceptors.response.use(function (config) {
    setTimeout(() => {
        Toast.hide();   
    }, 200);
    return config
})