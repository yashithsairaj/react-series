import { useState } from "react";
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  function pageReset() {
    window.location.reload();
  }

  return (
    <div className='w-full h-screen duration-200 rounded-md ' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-1 rounded-3xl'>
          <button
           onClick={() => setColor("red")}
           className=' outline-none px-4 py-1 rounded-full shadow-lg text-black hover:bg-red-600'>
            red
          </button>
          <button
           onClick={() => setColor("blue")}
           className=' outline-none px-4 py-1 rounded-full shadow-lg text-black hover:bg-blue-600'>
            blue
          </button>
          <button
           onClick={() => pageReset()}
           className=' outline-none px-4 py-1 rounded-full shadow-lg text-black'>
            reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
