import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../../App'

const Home = () => {

  const [data, setData] = useState([])
  const { state, dispatch } = useContext(UserContext)

  useEffect(() => {
    fetch('/allposts', {
      method: 'GET',
      headers: {
        "Authorization": "Bearer " + localStorage.getItem('jwt_token')
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setData(data.posts)
      })
      .catch(err => { console.error(err) })
  }, [])

  const likePost = (id) => {
    fetch('/like', {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem('jwt_token')
      },
      body: JSON.stringify({
        postId: id
      })
    })
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        const newData = data.map(item => {
          if (item._id === result._id) {
            return result;
          }
          else {
            return item;
          }
        })
        setData(newData);
      })
      .catch(err => { console.error(err) })
  }

  const unlikePost = (id) => {
    fetch('/unlike', {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem('jwt_token')
      },
      body: JSON.stringify({
        postId: id
      })
    })
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        const newData = data.map(item => {
          if (item._id === result._id) {
            return result;
          }
          else {
            return item;
          }
        })
        setData(newData);
      })
      .catch(err => { console.error(err) })
  }

  const makeComment = (text, postId) => {
    fetch('/comment', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('jwt_token')
      },
      body: JSON.stringify({
        text: text,
        postId: postId
      })
    })
      .then((response) => response.json())
      .then((result) => {
        // console.log(result)
        const newData = data.map(item => {
          if (item._id === result._id) {
            return result;
          }
          else {
            return item;
          }
        })
        setData(newData);
      })
      .catch((err) => console.error(err))
  }

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
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                    {item.likes.includes(state._id)
                      ? <i class="material-icons" onClick={() => unlikePost(item._id)}>thumb_down</i>
                      : <i class="material-icons" onClick={() => likePost(item._id)}>thumb_up</i>
                    }
                  </div>
                  <p style={{ width: '70rem' }}>{item.likes.length} likes</p>
                  <p style={{ width: '70rem' }}>{item.title}</p>
                  <p style={{ width: '70rem' }}>{item.body}</p>
                  {
                    item.comments.map((record) => {
                      return (
                        <h6><span style={{ fontWeight: '500' }}>{record.postedBy.name}</span> {record.text}</h6>
                      )
                    })
                  }
                  <form onSubmit={
                    (e) => {
                      e.preventDefault();
                      makeComment(e.target[0].value, item._id)
                    }
                  }>
                    <div class="input-group mb-3" style={{ width: '1080px' }}>
                      <input type="text" class="form-control" placeholder="Add a Comment" aria-label="Recipient's username" aria-describedby="button-addon2" />
                      <button class="btn btn-primary" type="submit" id="button-addon2">Send</button>
                    </div>
                  </form>
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
