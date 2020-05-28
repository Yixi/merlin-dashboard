import * as React from 'react'
import { useState } from 'react'

const styles = require('./App.scss')

console.log(styles)

function App() {
  const [count, useCount] = useState(0)

  return (
    <div className={styles.container}>
      <div className="ga">123</div>
      click count: {count}
      <button onClick={() => useCount((c) => c + 1)}>Plus</button>
    </div>
  )
}

export default App
