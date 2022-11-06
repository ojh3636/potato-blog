import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalNavigationBar from "./components/common/GlobalNavigationBar";
import MainBanner from "./components/home/MainBanner"
import Post from "./components/home/Post"
import './index.css'

function App({children}) {
  return (
    <div className='center'>
      <GlobalNavigationBar/>
      {children}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App>
    <MainBanner/>
    <Post/>
  </App>
);
