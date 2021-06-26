/**
 * 将 key 代理到 target 上
 * 即 target.key => target.sourcekey.key
 * @param {*} target 对象
 * @param {*} sourceKey $options 上的各种属性 _data，_props，_methods ...
 * @param {*} key target.sourcekey.key
 */
export function proxy(target, sourceKey, key) {
  Object.defineProperty(target, key, {
    get() {
      return target[sourceKey][key]
    },
    set(newVal) {
      // 是否需要判断新值？
      // 虽然在设置新值的时候还会走到响应式处理在判断新值，但是在这边再一次进行处理，是否是多余的操作，还是有一定的性能优化？
      // 可能和依赖收集有关，先暂定回头再看
      // if (val === newVal) return
      target[sourceKey][key] = newVal
    },
  })
}
