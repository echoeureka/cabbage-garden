import observe from './observe.js'
/**
 * 为对象属性设置 get、set 拦截
 * @param {*} target
 * @param {*} key
 * @param {*} val
 */
export default function defineReactive(target, key, val) {
  // 递归调用，处理 val 为对象的情况
  observe(val)
  Object.defineProperty(target, key, {
    get() {
      console.log(`getter ${key} = ${val}`)
      return val
    },
    set(newVal) {
      console.log(`setter ${key} = ${val} to ${newVal}`)
      if (val === newVal) return
      val = newVal
      // 为新值设置响应式，主要是针对直接赋值了对象或者数组的情况
      observe(newVal)
    },
  })
}
