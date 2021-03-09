/*
    Promise based HTTP client for the browser and node.js
    doc:http://www.axios-js.com/zh-cn/docs/
    github:https://github.com/axios/axios
*/
import axios from "axios";

// 创建axios实例
const http = axios.create({ baseURL: "/", timeout: 20 * 1000 });
// 设置Post请求头
http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
/* 请求拦截器,每次请求前，如果存在token则在请求头中携带token*/
http.interceptors.request.use(
    config=>{
        const token =  store.state.
    }
)

export default http;
