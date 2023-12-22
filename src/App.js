// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApiProvider } from "./components/posts/ApiContext";
import Layout from "./components/layout/Layout";
import PostsTable from "./components/posts/PostTable";
import PostDetails from "./components/posts/PostDetail";

const App = () => {
  return (
    <ApiProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/posts" element={<PostsTable />} />
          <Route path="/details/:id" element={<PostDetails />} />
        </Routes>
      </Router>
    </ApiProvider>
  );
};

export default App;
