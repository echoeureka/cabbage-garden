import { proxy } from './util.js'
import observe from './observe.js'
/**
 * 1、获取 (vm.$)options.data
 * 2、代理 vm._data 上的各个属性到 vm 上
 * 3、为 vm._data 设置响应式
 * @param {*} vm Vue 实例
 */
export default function initData(vm) {
  // es6 获取 data
  const { data } = vm.$options
  // 设置 vm._data 并确保是个对象 => data 的两种写法，函数返回对象 / 直接就是对象
  if (data) {
    vm._data = typeof data === 'function' ? data() : data
  } else {
    vm._data = {}
  }
  // 代理，将 vm._data 上的属性代理到 vm 实例上
  // 即 vm.cnt 获取到的是 vm._data.cnt，但是并没有绑定到 vm 上
  for (const key in vm._data) {
    proxy(vm, '_data', key)
  }
  // 设置响应式
  observe(vm._data)
}
