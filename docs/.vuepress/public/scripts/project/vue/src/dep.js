/**
 * key 和 Dep 是一一对应关系
 * Dep 和 watcher 是一对一或一对多关系
 */
export default function Dep() {
  this.watchers = []
}

/**
 * 静态属性 null | watcher 实例
 * 实例化 watcher 时赋值，依赖收集完成之后变为 null
 */
Dep.target = null

/**
 * 收集 wacther
 * 在发生读取操作 vm.xxx && Dep.target !== null，收集
 * @returns
 */
Dep.prototype.depend = function() {
  // 防止重复收集依赖
  if (this.watchers.includes(Dep.target)) return
  this.watchers.push(Dep.target)
}

/**
 * 通知更新
 */
Dep.prototype.notify = function() {
  for (const watcher of this.watchers) {
    watcher.update()
  }
}
