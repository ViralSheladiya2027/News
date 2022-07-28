
import './App.css';

import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

class App extends Component {
  pageSize = 5;
  apikey=process.env.REACT_APP_NEWS_API

  state={
    progress:0
  }

  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
       <NavBar/>
       <LoadingBar
       height={3}
        color='#f11946'
        progress={this.state.progress}
      />
      
       <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress} apikey = {this.apikey} key = "general" pageSize={this.pagesize} country ="in" category = "general"/>}/>
          <Route exact  path="/business"element={<News setProgress={this.setProgress} apikey = {this.apikey} key = "business" pageSize={this.pagesize} country ="in" category = "business"/>}/>
          <Route exact  path="/entertainment" element={ <News setProgress={this.setProgress} apikey = {this.apikey} key = "entertainment" pageSize={this.pagesize} country ="in" category = "entertainment"/>}/>
          <Route exact  path="/health"element={ <News setProgress={this.setProgress} apikey = {this.apikey} key = "health" pageSize={this.pagesize} country ="in" category = "health"/>}/>
          <Route exact  path="/science"element={ <News setProgress={this.setProgress} apikey = {this.apikey} key = "science" pageSize={this.pagesize} country ="in" category = "science"/>}/>
          <Route exact path="/sports"element={ <News setProgress={this.setProgress} apikey = {this.apikey} key = "sports" pageSize={this.pagesize} country ="in" category = "sports"/>}/>
          <Route exact  path="/technology"element={ <News setProgress={this.setProgress} apikey = {this.apikey} key = "technology" pageSize={this.pagesize} country ="in" category = "technology"/>}/>
        
          
        </Routes>
       </Router>
      </div>
    );
  }
}

export default App;
