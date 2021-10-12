// import axios from 'axios'
// import { Toast } from 'vant'
// // js中导入store就可以使用
// import store from '@/store/index.js'
// import router from '../router/index.js'
// // 从vant组件库中国按需导入Toast
// // 这个是线上地址
// // const root = 'http://www.liulongbin.top:8000'
// const request = axios.create({
//   baseURL: 'http://www.liulongbin.top:8000'
//   // baseURL: 'http://192.168.141.73:8000'
//
// })
// // 1.拦截器的声明挂载,UI定要放到request实例创建之后
// // 2.由于我们在项目中是基于request实例对象发起的请求,因此,拦截器一定要挂载给request,而不是axios
//
// // 添加请求拦截器
// // 在请求拦截器的第一个function中,形参config就是每次请求的配置项
// request.interceptors.request.use(function (config) {
//   // 在发送请求之前做些什么
//   // 展示loading效果
//   Toast.loading({
//     message: '加载中...',
//     duration: 0
//   })
//   const tokenStr = store.state.tokenInfo.token
//   if (tokenStr) {
//     config.headers.Authorization = 'Bearer ' + tokenStr
//   }
//   return config
// }, function (error) {
//   // 对请求错误做些什么
//   // 隐藏loading效果
//   Toast.clear()
//   return Promise.reject(error)
// })
//
// // 添加响应拦截器
// request.interceptors.response.use(function (response) {
//   // 对响应数据做点什么
//   Toast.clear()
//   return response
// }, async function (error) {
//   // 对响应错误做点什么
//   Toast.clear()
//   // 从vuex获取refresh_token的值
//   const refreshToken = store.state.tokenInfo.refresh_token
//   // 判断响应的状态码
//   // 如果refresh_token有值,且状态码为401
//   if (error.response.status === 401 && refreshToken) {
//     try {
//       // 大坑1:千万不要在这里直接使用request对象,来发起换token请求
//       const { data: res } = await axios({
//         method: 'put',
//         // 大坑2:直接使用axios发起请求的时候,必须给出完整的url地址
//         url: 'http://www.liulongbin.top:8000/v1_0/authorizations',
//         headers: {
//           Authorization: 'Bearer ' + refreshToken
//         }
//       })
//       console.log(res)
//       // TODO1:用新token替换vuex和localStorage中的旧token
//       store.commit('updateTokenInfo', { token: res.data.token, refresh_token: refreshToken })
//       // TODO2:继续完成上次失败的那个请求
//       // 1.请求的method是什么
//       // 2.url地址
//       // 3.请求参数是什么
//       return request(error.config)
//     } catch {
//       // 只要是执行到catch中的代码,证明token和refresh_token都过期了
//       store.commit('cleanState')
//       router.replace('/login?pre=' + router.currentRoute.fullPath)
//     }
//   }
//   return Promise.reject(error)
// })
//
// export default request
// // 18340310323
