/**
 * 通过拦截数组的 7 个改变自身的方法实现响应式
 * @param {*} target
 * @param {*} key
 * @param {*} val
 */

/**
 * 数组响应式
 * 对数组原型部分方法进行增强
 */
const arrayProto = Array.prototype
const arrayProProto = Object.create(arrayProto)
const methodsToPatch = ['push', 'pop', 'unshift', 'shift', 'splice', 'sort', 'reverse']

methodsToPatch.forEach((method) => {
  Object.defineProperty(arrayProProto, method, {
    value: function(...args) {
      // 完成数组方法的本职工作
      const ret = arrayProto[method].apply(this, args)
      // 进行响应式操作
      console.log(`array reactive`)
      return ret
    },
    configurable: true,
    writable: true,
    enumerable: true,
  })
})

export default function protoArgument(arr) {
  arr.__proto__ = arrayProProto
}

// Vue 提供的在原本对象上添加响应式属性的操作
// function $set(target, key, val) {
//   defineReactive(target, key, val)
// }
