const casual = require('casual-browserify')

const _EXCLUDED = [
  'button',
  'submit',
  'hidden'
]

const isFunction = (f) => f instanceof Function

function findInputElements () {
  if (typeof window === 'undefined') {
    console.warning('Form autofill just works in client side')
    return null
  }

  const inputs = document.querySelectorAll('form input')
  const selects = document.querySelectorAll('form select')
  const textAreas = document.querySelectorAll('form textArea')

  return [...inputs, ...textAreas] 
}

function fill (elements = []) {
  if (!elements.length) {
    console.warning('cannot find DOM input elements')
    return null;
  }

  elements.forEach(el => {
    if (!_EXCLUDED[el.type]) {
      const value = casual[el.name]
      if (value) {
        el.value = value
      }
    }
  })
}

module.exports = {
  run: () => {
    const elements = findInputElements()
    console.log(elements)
    fill(elements)
    //console.log('hello workd')
  }
}
