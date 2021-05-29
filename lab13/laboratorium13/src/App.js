import logo from './logo.svg';
import './App.css';
import PostsList from './PostsList'
import React from 'react'
import {BrowserRouter as Router,Switch,Route,useHistory} from 'react-router-dom';
import PostDetail from './PostDetail'
import FillForm from './FillForm'
import useForm from './useForm'

function App() {
  const {handleChange,userData,handleSubmit,errors,formStatus,history} = useForm()

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={PostsList}/>
          <Route path='/port/create' exact component={FillForm} />
          <Route path="/details/:id" component={PostDetail}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
