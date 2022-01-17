import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../../App'
import { useParams } from 'react-router-dom'

const Profile = () => {

  const [pic, setPic] = useState([])
  const { state, dispatch } = useContext(UserContext)
  const { userid } = useParams()

  console.log(userid)

  useEffect(() => {
    fetch(`/user/${userid}`, {
      method: 'GET',
      headers: {
        "Authorization": "Bearer " + localStorage.getItem('jwt_token')
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // setPic(data.posts)
      })
      .catch(error => console.log(error));
  }, [])

  return (
    <>
      <div style={{
        width: '1200px',
        margin: '20px auto',
        padding: '50px',
        borderBottom: '1px solid gray'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
          <div>
            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" alt="User Picture" style={{ width: '160px', height: '160px', borderRadius: '80px' }} />
          </div>
          <div>
            <h3>{state ? state.name : "Loading"}</h3>
            <div style={{
              display: 'flex',
              width: '480px',
              justifyContent: 'space-between',
            }}>
              <h5>40 posts</h5>
              <h5>40 followers</h5>
              <h5>40 following</h5>
            </div>
          </div>
        </div>

      </div>
      <div className="gallery">
        {
          pic.map(item => {
            return (
              <img key={item._id} className="item" src={item.photo} alt={item.title} />
            )
          })
        }
      </div>
    </>
  )
}

export default Profile
