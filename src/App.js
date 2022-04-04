import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import authToken from './config/authToken';
import NewUser from './components/auth/NewUser';

import { Provider } from 'react-redux';
import store from './store';
import LoginUser from './components/auth/LoginUser';
import Restaurants from './components/restaurant/Restaurants';
import NewSucur from './components/branch/NewBranch';
import ListBranch from './components/branch/ListBranch';

const token = localStorage.getItem('token');
if(token){
  authToken(token);
}
function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Restaurants/>}/>
            <Route path='/login' element={<LoginUser/>}/>
            <Route path='/newuser' element={<NewUser/>}/>
            <Route path='/newsucur' element={<NewSucur/>}/>
            <Route path='/listsucur' element={<ListBranch/>} />
          </Routes>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
