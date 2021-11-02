import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div>
      <div class="outer-container">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Sign Up</h5>
            <form>
              <div class="mb-3">
                <label for="exampleInputName" class="form-label">Name</label>
                <input type="text" class="form-control" id="exampleInputName" />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
              </div>
              <button type="submit" class="btn btn-primary">SIGN UP</button>
            </form>
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
