function call(thisArg: any, ...argArray: any[]) {
  const context = thisArg ?? window
  const fnSymbol = Symbol('fn')
  context[fnSymbol] = this
  const result = context[fnSymbol](...(argArray ?? []))
  delete context[fnSymbol]
  return result
}
