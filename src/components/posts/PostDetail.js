// PostDetails.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useApi } from "./ApiContext";
import Spinner from "../ui/Spinner";

const PostDetails = () => {
  const { fetchData, loading, error } = useApi();
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const data = await fetchData(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        setPost(data);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchPostDetails();
  }, [id]);

  return (
    <div className="container mt-4">
      {loading ? (
        <Spinner />
      ) : error ? (
        <div className="alert alert-danger" role="alert">
          Error: {error}
        </div>
      ) : post ? (
        <div className="card">
          <div className="card-header">
            <h2>ID: {post.id}</h2>
          </div>
          <div className="card-body">
            <h3 className="card-title">Title: {post.title}</h3>
            <p className="card-text">Body: {post.body}</p>
          </div>
        </div>
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
};

export default PostDetails;
