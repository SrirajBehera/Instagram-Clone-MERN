import React from 'react'

const CreatePost = () => {
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
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Title of the post" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Body</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
            </div>
            <div class="mb-3">
              <label for="formFile" class="form-label">Upload Photograph</label>
              <input class="form-control" type="file" id="formFile" />
            </div>
            <button type="submit" class="btn btn-primary">Upload Post</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreatePost
