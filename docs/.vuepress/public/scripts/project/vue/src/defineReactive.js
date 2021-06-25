function defineReactive(target, key, val) {
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
      observe(newVal)
    },
  })
}

function Observer(obj) {
  if (Array.isArray(obj)) {
    // __proto__ vs prototype ?
    obj.__proto__ = arrayProProto
  } else {
    this.walk(obj)
  }
}

function observe(obj) {
  if (typeof obj !== 'object') return
  return new Observer(obj)
}

Observer.prototype.walk = function(obj) {
  for (const key in obj) {
    defineReactive(obj, key, obj[key])
  }
}

function set(target, key, val) {
  defineReactive(target, key, val)
}

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
      const ret = arrayProto[method].apply(this, args)
      console.log(`array reactive`)
      return ret
    },
    configurable: true,
    writable: true,
    enumerable: false,
  })
})

const obj = {
  a: 'a',
  b: {
    bb: 'bb',
  },
  c: ['c', 'c', 'c'],
}

observe(obj)

obj.c.push('c')
console.log(obj.c)
