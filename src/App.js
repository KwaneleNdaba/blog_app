import React from 'react';
import Home from "./pages/home/Home";
import Topbar from "./compnents/topbar/topbar";
import Single from "./pages/home/single/single";
import Write from "./write/write";
import Settings from "./pages/home/settings/settings";
import Register from "./pages/home/register/register";
import Login from "./pages/home/login/login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SinglePost from './pages/home/single/singlePost/singlePost';
function App() {

  const user = false;
  return (
    <Router>
      <div>
  <Topbar/>
        <Routes>
        <Route exact path="/" element={<Home />} />
          <Route path="/login" element={user ? <Home/> : <Login /> }  />
          <Route path="/register" element={user ? <Home/> : <Register /> } />
          <Route path="/write-blog" element={user ? <Write/> : <Register /> }  />
          <Route path="/settings" element={user ? <Settings/> : <Register />} />
          <Route path="/post/:postId" element={<Single />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
