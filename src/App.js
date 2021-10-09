import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import VideoList from './components/VideoList';

function App() {
  return (
    <div className="App">
      <Header />
	  <Nav />
	  <VideoList />
    </div>
  );
}

export default App;
