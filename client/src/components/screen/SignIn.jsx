import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

const SignIn = () => {

  const history = useHistory()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginUser = () => {
    fetch("/signin", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        if (data.error) {
          console.log(data.error)
          alert(data.error)
        } else {
          alert("Signed In Successfully!")
          history.push('/')
        }
      })
      .catch(error => console.log(error))
  }

  return (
    <div class="outer-container">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Sign In</h5>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" value={email} onChange={(res) => setEmail(res.target.value)} />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" value={password} onChange={(res) => setPassword(res.target.value)} />
          </div>
          <button class="btn btn-primary" onClick={() => loginUser()}>SIGN IN</button>
          <h6 class="mt-3">
            <Link to="/signup" >Don't have an account?</Link>
          </h6>
        </div>
      </div>
    </div>
  )
}

export default SignIn
