import React from 'react'

const Home = () => {
  return (
    <>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: '20px'
      }}>
        <div class="card" style={{ width: "70rem" }}>
          <h3 style={{ padding: "5px 10px" }}>Sriraj</h3>
          <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" class="card-img-top" alt="user-post" style={{ height: '550px' }} />
          <div class="card-body" style={{ display: 'flex', flexDirection: 'column' }}>
            <i class="material-icons" style={{ color: 'red'}}>favorite</i>
            <p style={{ width: '70rem' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, reprehenderit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores iste dicta fugiat ipsum quasi hic alias fuga, minus earum incidunt ad sapiente facere asperiores vero, corporis itaque culpa. Ullam, sit!</p>
            <div class="input-group mb-3" style={{ width: '1080px' }}>
              <input type="text" class="form-control" placeholder="Add a Comment" aria-label="Recipient's username" aria-describedby="button-addon2" />
              <button class="btn btn-primary" type="button" id="button-addon2">Send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
