import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState({
    name:'',
    lastName:''
  })
  const handleData = (event) => {
    setData({
      ...data,
      [event.target.name] : event.target.value
    })
  }
  console.log(data)
  const submit = (object) => {
    try{
      fetch('http://127.0.0.1:8000/products', {
        method:'POST', 
        mode:'no-cors',
        headers:{'Content-type':'application/json'},
        body: JSON.stringify(object)
      })
    }
    catch(err){
      console.warn(err)
    }
  }
  
  return (
    <div className="App">
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <div>
        <h1>Hola Mundo!!</h1>
        <input type="text" value={data.name} onChange={handleData} name={'name'}  className='form' />
        <input type="text" value={data.lastName} onChange={handleData} name={'lastName'}  className='form'/>
        <button type='submit' onClick={() => submit(data)} className='formButton'>Enviar</button>
      </div>
    </div>
  )
}

export default App
