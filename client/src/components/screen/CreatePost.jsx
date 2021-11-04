import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const CreatePost = () => {

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [url, setUrl] = useState('')

  const history = useHistory()

  useEffect(() => {
    if (url) {
      fetch("/createpost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("jwt_token")
        },
        body: JSON.stringify({
          title: title,
          body: body,
          url: url
        })
      })
        .then(response => response.json())
        .then(data => {
          if (data.error) {
            console.log(data.error)
            alert(data.error)
          } else {
            alert("Post Uploaded Successfully!")
            history.push('/')
          }
        })
        .catch(error => console.log(error))
    }
  }, [url])

  const postDetails = async () => {
    const data = new FormData()
    data.append("file", url)
    data.append("upload_preset", "instagram_mern_clone")
    data.append("cloud_name", "srirajdev")

    fetch("https://api.cloudinary.com/v1_1/srirajdev/image/upload", {
      method: "POST",
      body: data
    }) // base api url + add /image/upload
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        setUrl(data.url)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: '20px'
      }}>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Create Post</h5>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Title</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" value={title} onChange={(res) => setTitle(res.target.value)} placeholder="Title of the post" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Body</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" value={body} onChange={(res) => setBody(res.target.value)} rows="5"></textarea>
            </div>
            <div class="mb-3">
              <label for="formFile" class="form-label">Upload Photograph</label>
              <input class="form-control" type="file" id="formFile" onChange={(res) => setUrl(res.target.files[0])} />
            </div>
            <button class="btn btn-primary" onClick={() => postDetails()}>Upload Post</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreatePost
