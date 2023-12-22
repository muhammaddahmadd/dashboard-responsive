// import React, { useState, useEffect } from "react";

// function Details(props) {
//   const [details, setDetails] = useState({});
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       const postId = props.match.params.id;

//       try {
//         const response = await fetch(`${url}${endpoint}/${postId}`);

//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }

//         const data = await response.json();
//         setDetails(data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching data:", error.message);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [props.match.params.id]);

//   return (
//     <div>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div>
//           <h2>ID: {details.id}</h2>
//           <h3>Title: {details.title}</h3>
//           <p>Body: {details.body}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Details;
