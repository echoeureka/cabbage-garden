import Observer from './observer.js'
/**
 * 通过 Observer 类为对象设置响应式
 * @param {*} obj
 * @returns Observer 实例
 */
export default function observe(obj) {
  // 控制递归结束，当 obj 不是 object 时结束递归，设置响应式能力
  if (typeof obj !== 'object') return
  // obj.__ob__  是 Obserber 实例
  // 如果 obj.__ob__ 已经存在，说明深层已经具有响应式能力，则直接返回已有的响应式对象
  if (obj.__ob__) return obj.__ob__
  // 返回 Observer 实例
  return new Observer(obj)
}
