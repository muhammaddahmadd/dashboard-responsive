import React, { useState, useEffect } from "react";
import { Table, Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useApi } from "./ApiContext";
import Spinner from "../ui/Spinner";

const PostsTable = () => {
  const { fetchData, loading, error } = useApi();
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10; // Display 10 posts per page

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await fetchData(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(data);
      } catch (error) {
        // Handle error
      }
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="m-5">
      {loading ? (
        <Spinner />
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          <Table bordered hover size="lg">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>
              {currentPosts.map((post) => (
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
          <Pagination className="justify-content-center">
            <Pagination.Prev
              onClick={() =>
                setCurrentPage((prevPage) =>
                  prevPage > 1 ? prevPage - 1 : prevPage
                )
              }
            />
            {Array.from({
              length: Math.ceil(posts.length / postsPerPage),
            }).map((_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={() =>
                setCurrentPage((prevPage) =>
                  prevPage < Math.ceil(posts.length / postsPerPage)
                    ? prevPage + 1
                    : prevPage
                )
              }
            />
          </Pagination>
        </div>
      )}
    </div>
  );
};

export default PostsTable;
