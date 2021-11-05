import React, { useState, useEffect } from 'react'

const Home = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch('/allposts', {
      method: 'GET',
      headers: {
        "Authorization": "Bearer " + localStorage.getItem('jwt_token')
      }
    })
      .then(response => response.json())
      .then(data => {
        setData(data.posts)
      })
      .catch(err => { console.error(err) })

  }, [])

  return (
    <>
      <div style={{
        display: "flex",
        flexDirection: "column-reverse",
        justifyContent: "center",
        alignItems: "center",
        margin: '20px'
      }}>

        {
          data.map(item => {
            return (
              <div class="card" style={{ width: "70rem" }} key={item._id}>
                <h3 style={{ padding: "5px 10px" }}>{item.postedBy.name}</h3>
                <img src={item.photo} class="card-img-top" alt="user-post" style={{ height: '550px' }} />
                <div class="card-body" style={{ display: 'flex', flexDirection: 'column' }}>
                  <i class="material-icons" style={{ color: 'red' }}>favorite</i>
                  <p style={{ width: '70rem' }}>{item.title}</p>
                  <p style={{ width: '70rem' }}>{item.body}</p>
                  <div class="input-group mb-3" style={{ width: '1080px' }}>
                    <input type="text" class="form-control" placeholder="Add a Comment" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button class="btn btn-primary" type="button" id="button-addon2">Send</button>
                  </div>
                </div>
              </div>
            )
          })
        }

      </div>
    </>
  )
}

export default Home
