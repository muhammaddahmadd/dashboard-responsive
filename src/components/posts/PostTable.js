// PostsTable.js
import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useApi } from "./ApiContext";

const PostsTable = () => {
  const { fetchData, loading, error } = useApi();
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await fetchData(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(data.slice(0, 10));
      } catch (error) {
        // Handle error
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>
                  <Link to={`/details/${post.id}`}>{post.id}</Link>
                </td>
                <td>{post.title.split(" ").slice(0, 2).join(" ")}</td>
                <td>{post.body.slice(0, 50)}...</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default PostsTable;
