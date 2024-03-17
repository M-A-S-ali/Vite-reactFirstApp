import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'



function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
   alert("iam default alert")
  }, [count])
  

  return (
    <>
    <div className="text"><h1>hello</h1></div>
      <Navbar />
      <button onClick={()=>setCount(count+1)}>count is {count}</button>
    </>
  )
}

export default App
