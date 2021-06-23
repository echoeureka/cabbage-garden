function bind(thisArg: any, ...argArray: any[]) {
  const context = thisArg ?? window
  const fnSymbol = Symbol('fn')
  context[fnSymbol] = this
  return function (..._argArray: any[]) {
    const result = context[fnSymbol](...(_argArray.concat(argArray) ?? []))
    delete context[fnSymbol]
    return result
  }
}
