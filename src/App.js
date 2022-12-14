import React from 'react';
import './App.scss';
import {Routes, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/signinandsignuppage/SignInAndSignUp.component';

import {auth} from '../src/firebase/firebase.utils'

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser:user});
      console.log(user);
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
          <Routes>
            <Route exact path='/' element={<HomePage/>} />
            <Route path='shop' element={<ShopPage/>} />
            <Route path='signin' element={<SignInAndSignUp/>} />
          </Routes>
      </div>
    );
  }
}
export default App;