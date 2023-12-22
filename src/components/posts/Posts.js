// import React, { useState, useEffect } from "react";
// import { Table } from "react-bootstrap";
// import { Link } from "react-router-dom";

// const url = "https://jsonplaceholder.typicode.com";
// const endpoint = "/posts";

// function PostService() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`${url}${endpoint}`);

//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }

//         const data = await response.json();
//         setUsers(data.slice(0, 10));
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching data:", error.message);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Title</th>
//               <th>Body</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user.id}>
//                 <td>
//                   <Link to={`/details/${user.id}`}>{user.id}</Link>
//                 </td>
//                 <td>{user.title.split(" ").slice(0, 2).join(" ")}</td>
//                 <td>{user.body.slice(0, 50)}...</td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       )}
//     </div>
//   );
// }

// export default PostService;
