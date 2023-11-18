import './App.css';
import React from 'react';
import Home  from './pages/Home';
import Navbar from './components/Navbar'
import Photo from './pages/Photo';
import Category from './pages/Category'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <div className='px-5 py-5 lg:px-10 lg:py-10 xl:px-40 xl:py-10' >
        <Route exact path="/" component={Home} />
        <Route path="/photo/:id" component={Photo} />
        <Route path="/category/:id" component={Category} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;