const callfile = require('child_process')
const path = require('path')

class Scp {
  constructor(options) {
  }

  apply(compiler) {
    compiler.hooks.done.tap('Scp', (status) => {
      console.log('Upload to Router')
      callfile.execFile(path.join(__dirname, '../upload.sh'))
    })
  }
}

module.exports = Scp
