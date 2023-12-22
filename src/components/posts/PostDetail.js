// PostDetails.js
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useApi } from "./ApiContext";
import { useEffect } from "react";

const PostDetails = () => {
  const { fetchData, loading, error } = useApi();
  const { id } = useParams();
  const [post, setPost] = useState(null);
  //   const [error, setError] = useState("");

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
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : post ? (
        <div>
          <h2>ID: {post.id}</h2>
          <h3>Title: {post.title}</h3>
          <p>Body: {post.body}</p>
        </div>
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
};

export default PostDetails;
