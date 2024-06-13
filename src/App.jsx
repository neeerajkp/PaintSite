import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'
import New from './Paint/New'
import News1 from './Paint/News1'
import News2 from './Paint/News2'
import News3 from './Paint/News3'
import About from './Paint/About'
import Home from './Paint/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" exact element={<New />} />
      </Routes>
      <Routes>
        <Route path="/News1" exact element={<News1 />} />
      </Routes>
      <Routes>
        <Route path="/News2" exact element={<News2 />} />
      </Routes>
      <Routes>
        <Route path="/News3" exact element={<News3 />} />
      </Routes>
      <Routes>
        <Route path="/About" exact element={<About />} />
      </Routes>
      <Routes>
        <Route path="/Home" exact element={<Home />} />
      </Routes>
    </>
  )
}

export default App
