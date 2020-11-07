import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders';
import Footer from './Footer';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51HQJXtLhJU2bmSqWzeP5pGLZhS2DeMjVnz0pVzKH3uWWq49yTlrJNz1Qn6OjtLgeb6xhJxpRkGyusgfTk3wgmqnC00PL04diB9');
 
function App() {
  // eslint-disable-next-line
  const [state, dispatch] = useStateValue();
  
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });
  // eslint-disable-next-line
  }, [])

  return (
    <Router>
      <div className="pageContainer">
        <div className="app">
          <Switch>
            <Route path="/checkout">
              <Header/>
              <Checkout/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/payment">
              <Header/>
              <Elements stripe={promise}>
                <Payment/>
              </Elements>
            </Route>
            <Route path="/orders">
              <Header/>
              <Orders/>
            </Route>
            <Route path="/">
              <Header/>
              <Home/>
            </Route>
          </Switch>
        </div>
        <Footer/>
      </div>     
    </Router>
  );
}

export default App;
