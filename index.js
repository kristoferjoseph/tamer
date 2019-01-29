const css = require('css')
module.exports = function Tamer (stylesheet) {
  stylesheet = stylesheet || ''
  let copy = {}
  let styles = css.parse(stylesheet)
  styles.stylesheet.rules.map(r => {
    r.selectors.map(s => {
      copy[s] = r
    })
  })
  return function tame (extensions) {
    extensions = extensions || {}
    let components = Object.keys(extensions)
    components.map(c => {
      extensions[c].map(e => {
        copy[e].selectors.unshift(c)
      })
    })
    return css.stringify(styles)
  }
}
