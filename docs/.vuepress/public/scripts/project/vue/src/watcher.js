import Dep from './dep.js'

/**
 * @param {function} cb callback function, update Dom
 */
export default function Watcher(cb) {
  // backup callback function
  this._cb = cb
  // assign this(Watcher Object) to Dep.target
  Dep.target = this
  // execute callback function,
  // inside callback function there are some vm.xxx's attributes read, collect dependences
  cb()
  // remove this attribbute to avoid repeat collection
  Dep.target = null
}

Watcher.prototype.update = function() {
  this._cb()
}
