import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [content, setContent] = useState('')
  const new_quote = () => {
    axios.get('https://api.adviceslip.com/advice').then(response => {
      setContent(response.data.slip.advice)
      console.log(response)
    }).catch(error => {
      console.log(error)
    })
  }
  return (
    <div className="container">

      <button onClick={new_quote} className='btn btn-info'>Display New Quote</button>
      <p>{content}</p>
    </div>
  )
}

export default App
