import React, { useEffect, createContext, useReducer, useContext } from 'react';
import '../src/App.css'
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import Home from './components/screen/Home';
import Profile from './components/screen/Profile';
import SignIn from './components/screen/SignIn';
import SignUp from './components/screen/SignUp';
import CreatePost from './components/screen/CreatePost';
import UserProfile from './components/screen/UserProfile'
import { reducer, initialState } from './reducers/userReducer';

export const UserContext = createContext()

const Routing = () => {

  const history = useHistory()
  const { state, dispatch } = useContext(UserContext)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user_details"))
    if (user) {
      dispatch({ type: "USER", payload: user }) // handing the situ when the user closes the app but does not log out so reopening the app should be taken care of
      // history.push('/')
    } else {
      history.push('/signin')
    }
  }, [])

  return (
    // this will make sure that atleast one route is active
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/signin'>
        <SignIn />
      </Route>
      <Route path='/signup'>
        <SignUp />
      </Route>
      <Route exact path='/profile'>
        <Profile />
      </Route>
      <Route path='/createpost'>
        <CreatePost />
      </Route>
      <Route path='/profile/:userid'>
        <UserProfile />
      </Route>
    </Switch>
  )
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <UserContext.Provider value={{ state: state, dispatch: dispatch }}>
      <BrowserRouter>
        <Navbar />
        <Routing />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
