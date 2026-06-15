import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { id: Date.now(), sentBy: 'User', text: input }])
      setInput('')
    }
  }

  const handleResponseReceived = (response) => {
    setMessages((prevMessages) => [...prevMessages, { id: Date.now(), sentBy: 'Customer Service', text: response }])
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg) => (
          <div key={msg.id} className={`message message-${msg.sentBy}`}>
            <span className="user-name">{msg.sentBy}: </span>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  )
}

export default App
