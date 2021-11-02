import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

const SignUp = () => {

  const history = useHistory()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const createUser = () => {
    fetch("/signup", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          console.log(data.error)
          alert(data.error)
        } else {
          alert(data.message)
          history.push('/signin')
        }
      })
      .catch(error => console.log(error))
  }

  return (
    <div>
      <div class="outer-container">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Sign Up</h5>
            <div class="mb-3">
              <label for="exampleInputName" class="form-label">Name</label>
              <input type="text" class="form-control" id="exampleInputName" value={name} onChange={(res) => setName(res.target.value)} />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" value={email} onChange={(res) => setEmail(res.target.value)} />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" value={password} onChange={(res) => setPassword(res.target.value)} />
            </div>
            <button class="btn btn-primary" onClick={() => createUser()}>SIGN UP</button>
            <h6 class="mt-3">
              <Link to="/signin" >Already have an account?</Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
