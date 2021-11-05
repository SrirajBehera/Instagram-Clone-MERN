import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../App'

const Navbar = () => {

  const { state, dispatch } = useContext(UserContext)
  const renderList = () => {
    if (state) {
      return [
        <li class="nav-item">
          <Link class="nav-link" to="/">Home</Link>
        </li>,
        <li class="nav-item">
          <Link class="nav-link" to="/createpost">Create Post</Link>
        </li>,
        <li class="nav-item">
          <Link class="nav-link" to="/profile">Profile</Link>
        </li>
      ]
    } else {
      return [
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/signin">SignIn</Link>
        </li>,
        <li class="nav-item">
          <Link class="nav-link" to="/signup">SignUp</Link>
        </li>
      ]
    }
  }

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <Link class="navbar-brand" to="#">Instagram-Clone</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            {renderList()}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
