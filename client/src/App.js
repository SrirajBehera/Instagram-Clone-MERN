import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/screen/Home';
import Profile from './components/screen/Profile';
import SignIn from './components/screen/SignIn';
import SignUp from './components/screen/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/signin'>
        <SignIn />
      </Route>
      <Route path='/signup'>
        <SignUp />
      </Route>
      <Route path='/profile'>
        <Profile />
      </Route>
    </BrowserRouter>
  );
}

export default App;
