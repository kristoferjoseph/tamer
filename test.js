const assert = require('assert')
const Tamer = require('./')
const stylesheet = `
.padding0 {
  padding: 1rem;
}
.color-p1 {
  color: white;
}
.background-p2 {
  background-color: red;
}
.background-a1 {
  background-color: teal;
}
.font-size0 {
  font-size: 1rem;
}
`
const tame = Tamer(stylesheet)
const expected = `
.button,
.padding0 {
  padding: 1rem;
}
.button,
.color-p1 {
  color: white;
}
.button,
.background-p2 {
  background-color: red;
}
.background-a1 {
  background-color: teal;
}
.font-size0 {
  font-size: 1rem;
}
`
const extensions = {
  '.button': [
    '.padding0',
    '.color-p1',
    '.background-p2'
  ]
}
function strip (s) {
  return s.replace(/\s/g, '')
}
let pass = true
try {
  assert.equal(strip(tame(extensions)), strip(expected))
  pass = true
} catch (err) {
  pass = false
}

if (pass) {
  console.error('✅ PASS')
} else {
  console.error('❌ FAIL')
}
