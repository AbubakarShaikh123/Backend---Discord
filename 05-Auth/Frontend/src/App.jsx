import { useState } from 'react'
import axios from "axios"

function App() {
  const [count, setCount] = useState(0)

  const callBackend = async () => {
    const res = await axios.get("http://localhost:4000/")

    console.log(res.data);
    
    
  }

  return (
   <div>
     App
     <br />
     <button
        onClick={callBackend}
        className='borde px-3 py-2 bg-pink-300'
     >
      Click
     </button>
   </div>
  )
}

export default App
