import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div class="outer-container">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Sign In</h5>
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" class="btn btn-primary">SIGN IN</button>
          </form>
          <h6 class="mt-3">
            <Link to="/signup" >Don't have an account?</Link>
          </h6>
        </div>
      </div>
    </div>
  )
}

export default SignIn
