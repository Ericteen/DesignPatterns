var foo = {
  name: 'vue',
  version: '2.0'
}

function observe(data) {
  if (!data || typeof data !== 'object') {
    return
  }
  Object.keys(data).forEach(key => {
    defineReactive(data, key, data[key])
  })
}

function defineReactive(obj, key, val) {
  // observe(val)
  Object.defineProperty(obj, key, {
    get: function reactiveGetter() {
      return val
    },
    set: function reactiveSetter(newVal) {
      if (val === newVal) {
        return
      } else {
        val = newVal
        console.log(`监听成功: ${val} --> ${newVal}`)
      }
    }
  })
}

observe(foo)
foo.name = 'angular'
