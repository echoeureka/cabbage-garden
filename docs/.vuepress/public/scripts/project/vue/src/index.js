import initData from './initData'
/**
 * Vue 构造函数
 * @param {*} options
 */
export default function Vue(options) {
  this._init(options)
}

/**
 * 初始化配置对象
 * @param {*} options
 */
Vue.prototype._init = function(options) {
  // 将 options 挂载到 Vue 实例上
  this.$options = options
  // 初始化 options.data
  // 代理 data 对象上的各个属性到 Vue 实例上
  // 给 data 对象上的各个属性设置响应式能力
  initData(this)
}
