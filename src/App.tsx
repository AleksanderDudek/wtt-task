import React from 'react';
import './App.css';
import StickyHeader from './components/Header/StickyHeader';
import PostsArea from './components/Posts/PostsArea';

function App() {
  return (
    <div className="App">
      <StickyHeader />
      <PostsArea />
    </div>
  );
}

export default App;
