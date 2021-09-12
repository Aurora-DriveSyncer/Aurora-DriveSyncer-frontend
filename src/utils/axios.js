import axios from "axios";
const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:9091"
    : "lyh543.cn";
const XHRTimeout = 30000;
// 创建axios实例
const service = axios.create({
  baseURL: baseUrl,
  timeout: XHRTimeout,
  withCredentials: true,
  xsrfCookieName: "csrftoken", // 添加 CSRF token
  xsrfHeaderName: "X-CSRFToken",
});
export default service;
