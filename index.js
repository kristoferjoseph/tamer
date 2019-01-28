const css = require('css')
module.exports = function Tamer (stylesheet) {
  stylesheet = stylesheet || ''
  return function tame (extensions) {
    extensions = extensions || {}
    let components = Object.keys(extensions)
    let styles = css.parse(stylesheet)
    styles.stylesheet.rules.map(r => {
      r.selectors.map(s => {
        components.map(c => {
          extensions[c].map(e => {
            if (e === s) {
              r.selectors.unshift(c)
            }
          })
        })
      })
    })
    return css.stringify(styles)
  }
}
