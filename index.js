const casual = require('casual-browserify')

const _EXCLUDED = [
  'button',
  'submit',
  'hidden'
]

const containerButtonStyle = `
  position: fixed;
  background: white;
  padding: 1rem;
  top: 50px;
  right: 50px;
  z-index: 99999;
  border: 1px solid black;
` 

const buttonStyle = `
  padding: 1rem;
  font-size: 16px;
  background: #ddd;
  border: 1px solid black;
  cursor: pointer;
`

const isExcluded = (el) => _EXCLUDED.includes(el)

const _ADITIONAL_PARAMS = {
  zip: () => casual.zip(6),
  lastname: () => casual.lastname,
  firstname: () => casual.firstname
}

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

function fillElements (elements = []) {
  if (!elements.length) {
    console.warning('cannot find DOM input elements')
    return null;
  }

  elements.forEach(el => {
    if (!isExcluded(el.type)) {
      const value = casual[el.name]
      if (_ADITIONAL_PARAMS[el.name]) {
        el.value = _ADITIONAL_PARAMS[el.name]() 
      } else if (value) {
        el.value = value
      } else {
        el. value = (casual[el.type]) ? casual[el.type] : ''
      }
    }
  })
}

function fill () {
  const elements = findInputElements()
  fillElements(elements)
}


function tool () {
  const button = document.createElement('button')
  button.textContent = 'Autofill'
  button.setAttribute('style', buttonStyle)
  button.onclick = () => fill() 

  const container = document.createElement('div')
  container.setAttribute('style', containerButtonStyle)
  container.appendChild(button)
  document.querySelector('body').appendChild(container)
}

module.exports = {
  fill,
  tool
}
