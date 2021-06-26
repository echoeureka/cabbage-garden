import protoArgument from './protoArgument.js'
import observe from './observe.js'
import defineReactive from './defineReactive.js'
import Dep from './dep.js'
/**
 * 为普通对象或数组设置响应式的入口
 * @param {*} obj
 */
export default function Observer(obj) {
  this.dep = new Dep()

  Object.defineProperty(obj, '__ob__', {
    value: this,
    /**
     * enumerable 设置为 false，防止被枚举
     * 1、可以在遍历对象(设置响应式)的时候跳过 __ob__
     * 2、将响应式对象字符串化的时候不显示 __ob__
     */
    enumerable: false,
    writable: true,
    configurable: true,
  })

  if (Array.isArray(obj)) {
    // __proto__ vs prototype ?
    // obj.__proto__ = arrayProProto
    // 数组响应式
    protoArgument(obj)
    this.observeArray(obj)
  } else {
    // 对象响应式
    this.walk(obj)
  }
}

/**
 * 遍历对象，为每一项设置 get、set 拦截
 * @param {*} obj
 */
Observer.prototype.walk = function(obj) {
  for (const key in obj) {
    defineReactive(obj, key, obj[key])
  }
}

/**
 * 遍历数组，为数组的每一项都设置响应式
 * 主要是处理数组中元素是对象的情况
 * const arr = [ { a: 'a', b: 'b' } ]
 * @param {*} obj
 */
Observer.prototype.observeArray = function(array) {
  for (const item of array) {
    observe(item)
  }
}
