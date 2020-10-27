import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  return (
    <section>
      <h2>Email Signup</h2>
      <input type="text" value={name} placeholder="Name" onChange={(e) => {
        setName(e.target.value)
      }} />
      <input type="text" value={email} placeholder="Email" onChange={(e) => {
        setEmail(e.target.value)
      }} />
    </section>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
