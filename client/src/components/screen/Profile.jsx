import React from 'react'

const Profile = () => {
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
            <h3>Sriraj Behera</h3>
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
        <img className="item" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" alt="User Picture" />
        <img className="item" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" alt="User Picture" />
        <img className="item" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" alt="User Picture" />
        <img className="item" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" alt="User Picture" />
        <img className="item" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" alt="User Picture" />
        <img className="item" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" alt="User Picture" />

      </div>
    </>
  )
}

export default Profile
